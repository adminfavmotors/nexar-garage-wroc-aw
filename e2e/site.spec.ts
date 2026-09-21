import { test, expect } from "@playwright/test";

test("each service appears once and can be opened, closed and restored from its link", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("nexar-cookie-consent", "essential"),
  );
  for (const route of ["/", "/uslugi"]) {
    await page.goto(route);
    await expect(page.locator(".catalog-item")).toHaveCount(6);
    for (const item of await page.locator(".catalog-item").all()) {
      const trigger = item.locator(".catalog-trigger");
      await trigger.click();
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      await expect(
        item.getByRole("link", { name: "Umów tę usługę" }),
      ).toBeVisible();
      await trigger.click();
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
      await expect(
        item.getByRole("link", { name: "Umów tę usługę" }),
      ).toHaveCount(0);
    }
  }
  await page.goto("/uslugi#diagnostyka-komputerowa");
  const diagnostics = page
    .locator("#diagnostyka-komputerowa")
    .locator(".catalog-trigger");
  await expect(diagnostics).toHaveAttribute("aria-expanded", "true");
  await diagnostics.focus();
  await page.keyboard.press("Enter");
  await expect(diagnostics).toHaveAttribute("aria-expanded", "false");
  await page.keyboard.press("Space");
  await expect(diagnostics).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: "Umów tę usługę" }).click();
  await page.goBack();
  await expect(
    page.locator("#diagnostyka-komputerowa .catalog-trigger"),
  ).toHaveAttribute("aria-expanded", "true");
});

test("Polish letters use the locally hosted font, not fallback glyphs", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator("h1").waitFor();
  await page.evaluate(async () => {
    const sample = document.createElement("span");
    sample.id = "polish-font-probe";
    sample.textContent = "ĄĆĘŁŃÓŚŹŻąćęłńóśźż";
    sample.style.font = '600 32px "Manrope Variable"';
    document.body.append(sample);
    await document.fonts.load(sample.style.font, sample.textContent);
    await document.fonts.ready;
  });
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("DOM.enable");
  await cdp.send("CSS.enable");
  const { root } = await cdp.send("DOM.getDocument");
  const { nodeId } = await cdp.send("DOM.querySelector", {
    nodeId: root.nodeId,
    selector: "#polish-font-probe",
  });
  const { fonts } = await cdp.send("CSS.getPlatformFontsForNode", { nodeId });
  expect(fonts.length).toBeGreaterThan(0);
  expect(
    fonts.every(
      (font) => font.isCustomFont && font.familyName.includes("Manrope"),
    ),
  ).toBe(true);
  await page
    .locator("#polish-font-probe")
    .evaluate((element) => element.remove());
});

test("the site works when browser storage is blocked", async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error("Storage unavailable");
    };
    Storage.prototype.setItem = () => {
      throw new Error("Storage unavailable");
    };
  });
  await page.goto("/");
  await expect(page.locator("h1")).toBeVisible();
  await page
    .getByRole("button", { name: "Tylko niezbędne", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Tylko niezbędne", exact: true }),
  ).toHaveCount(0);
  await page.getByRole("button", { name: "EN", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
});

test("responsive pages keep readable controls and stay within the viewport", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript(() =>
    localStorage.setItem("nexar-cookie-consent", "essential"),
  );
  for (const language of ["PL", "EN"]) {
    await page.addInitScript(
      (lang) => localStorage.setItem("nexar-lang", lang),
      language,
    );
    for (const width of [320, 375, 768, 1024, 1440, 1887]) {
      await page.setViewportSize({ width, height: 900 });
      for (const route of ["/", "/uslugi", "/rodo-cookies"]) {
        await page.goto(route);
        await expect(page.locator("h1")).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        await expect(page.locator("html")).toHaveAttribute(
          "lang",
          language.toLowerCase(),
        );
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        );
        expect(overflow, language + " " + route + " at " + width).toBe(false);
      }
    }
  }
  expect(errors).toEqual([]);
});

test("mobile menu, language and cookie choices work", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Tylko niezbędne", exact: true })
    .click();
  await expect(page.locator("#kontakt iframe")).toHaveCount(0);
  const menu = page.getByRole("button", { name: "Otwórz menu" });
  await menu.click();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .locator("#mobile-navigation")
    .getByRole("button", { name: "EN", exact: true })
    .click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Services and prices" })
    .click();
  await expect(page).toHaveURL(/\/uslugi$/);
  await expect(page.locator("#mobile-navigation")).toHaveCount(0);
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Services and prices",
  );
  await expect(
    page.getByRole("button", { name: "Essential only" }),
  ).toHaveCount(0);
});

test("service selection, date validation and booking error recovery", async ({
  page,
}) => {
  await page.addInitScript(() =>
    localStorage.setItem("nexar-cookie-consent", "essential"),
  );
  await page.goto("/uslugi#diagnostyka-komputerowa");
  await page.getByRole("link", { name: "Umów tę usługę" }).click();
  await expect(page.locator("#booking-service")).toHaveValue("diagnostics");
  await page.locator("#booking-full-name").fill("Test Layout");
  await page.locator("#booking-phone").fill("+48123456789");
  await page.locator("#booking-vehicle").fill("Test car");
  await page.locator("#booking-service").selectOption("other");
  await expect(page.locator("#booking-problem")).toBeVisible();
  await page.locator("#booking-problem").fill("Browser verification only");
  await page.locator("#booking-consent").check();
  await page.getByRole("button", { name: "Wyślij zgłoszenie" }).click();
  await expect(page.locator("#booking-preferred-date")).toBeFocused();
  await expect(page.locator("#booking-preferred-date")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
  await page.locator("#booking-preferred-date").click();
  await page.locator('[role="grid"] button:not([disabled])').first().click();
  await page.keyboard.press("Escape");
  let attempts = 0;
  const requestIds: string[] = [];
  await page.route("**/api/booking", async (route) => {
    const data = route.request().postDataJSON();
    expect(data.service).toBe("other");
    expect(data.preferredDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    requestIds.push(data.requestId);
    attempts += 1;
    await route.fulfill({
      status: attempts === 1 ? 500 : 200,
      json: { ok: attempts > 1 },
    });
  });
  await page.getByRole("button", { name: "Wyślij zgłoszenie" }).click();
  await expect(page.getByRole("alert")).toContainText(
    "Nie udało się wysłać zgłoszenia.",
  );
  await page.getByRole("button", { name: "Wyślij zgłoszenie" }).click();
  await expect(
    page.getByRole("heading", {
      name: "Dziękujemy. Potwierdzimy termin możliwie szybko.",
    }),
  ).toBeFocused();
  expect(attempts).toBe(2);
  expect(requestIds[0]).toBe(requestIds[1]);
});
