import { test, expect } from "@playwright/test";

test.use({ hasTouch: true, isMobile: true, reducedMotion: "reduce" });

for (const width of [320, 375, 430]) {
  test(`mobile controls and service closing at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 812 });
    await page.goto("/");
    const cookieButtons = page.locator(".cookie-actions button");
    const first = await cookieButtons.first().boundingBox();
    const second = await cookieButtons.last().boundingBox();
    expect(first!.y).toBe(second!.y);
    expect(first!.height).toBeGreaterThanOrEqual(44);
    await cookieButtons.first().tap();
    for (const control of await page.locator(".header-icon-button").all()) {
      const box = await control.boundingBox();
      expect(box!.width).toBeGreaterThanOrEqual(44);
      expect(box!.height).toBeGreaterThanOrEqual(44);
    }
    await page.goto("/uslugi");
    const trigger = page.locator(".catalog-trigger").first();
    await trigger.tap();
    await page.getByRole("button", { name: "Zwiń szczegóły" }).tap();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toBeFocused();
    const closedBox = await trigger.boundingBox();
    expect(closedBox!.y).toBeGreaterThanOrEqual(64);
    await expect(page.locator(".catalog-icon svg")).toHaveCount(6);
    const icons = await page
      .locator(".catalog-icon svg")
      .evaluateAll((elements) =>
        elements.map((element) => {
          const box = element.getBoundingClientRect();
          return {
            width: box.width,
            height: box.height,
            stroke: element.getAttribute("stroke-width"),
          };
        }),
      );
    expect(
      icons.every(
        (icon) =>
          icon.width === 28 && icon.height === 28 && icon.stroke === "1.75",
      ),
    ).toBe(true);
    await page.goto("/#rezerwacja");
    const date = page.locator("#booking-preferred-date");
    await date.tap();
    const calendar = page.getByRole("dialog");
    await calendar.evaluate(async (element) => {
      await Promise.all(
        element
          .getAnimations({ subtree: true })
          .map((animation) => animation.finished.catch(() => {})),
      );
    });
    const box = await calendar.boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(8);
    expect(box!.x + box!.width).toBeLessThanOrEqual(width - 8);
    const day = page.locator('[role="grid"] button:not([disabled])').first();
    const dayBox = await day.boundingBox();
    expect(dayBox!.width).toBeGreaterThanOrEqual(39);
    expect(dayBox!.height).toBeGreaterThanOrEqual(44);
    await day.tap();
    await expect(calendar).toHaveCount(0);
    await expect(date).toBeFocused();
    await expect(page.locator("#booking-preferred-date-value")).not.toHaveValue(
      "",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  });
}

test("landscape menu and calendar remain reachable", async ({ page }) => {
  await page.setViewportSize({ width: 667, height: 375 });
  await page.addInitScript(() =>
    localStorage.setItem("nexar-cookie-consent", "essential"),
  );
  await page.goto("/");
  await page.getByRole("button", { name: "Otwórz menu" }).tap();
  const menu = page.locator("#mobile-navigation");
  await menu.getByRole("link", { name: "Umów wizytę" }).tap();
  await expect(menu).toHaveCount(0);
  await page.locator("#booking-preferred-date").tap();
  const calendar = page.getByRole("dialog");
  await calendar.evaluate(async (element) => {
    await Promise.all(
      element
        .getAnimations({ subtree: true })
        .map((animation) => animation.finished.catch(() => {})),
    );
  });
  const box = await calendar.boundingBox();
  expect(box!.y).toBeGreaterThanOrEqual(8);
  expect(box!.y + box!.height).toBeLessThanOrEqual(367);
  await page.locator('[role="grid"] button:not([disabled])').last().tap();
  await expect(calendar).toHaveCount(0);
});
