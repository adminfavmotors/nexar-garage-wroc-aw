import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import bookingHandler, { validateBookingPayload } from "../../api/booking";

const validPayload = {
  requestId: "12345678-1234-1234-1234-123456789abc",
  lang: "PL",
  fullName: "Jan Kowalski",
  phone: "+48 123 456 789",
  email: "jan@example.com",
  vehicle: "Audi A4",
  year: "2018",
  service: "diagnostics",
  problem: "",
  preferredDate: "2026-10-20",
  notes: "Proszę o kontakt rano.",
  consent: true,
  company: "",
};

const createResponse = () => {
  const state: { statusCode: number; body: unknown; headers: Record<string, string> } = {
    statusCode: 200,
    body: null,
    headers: {},
  };

  const response = {
    setHeader(name: string, value: string) {
      state.headers[name] = value;
    },
    status(statusCode: number) {
      state.statusCode = statusCode;
      return response;
    },
    json(body: unknown) {
      state.body = body;
    },
  };

  return { response, state };
};

describe("booking API", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.BOOKING_FROM_EMAIL = "Nexar Garage <booking@example.com>";
    process.env.BOOKING_TO_EMAIL = "garage@example.com";
    delete process.env.BOOKING_ALLOWED_ORIGIN;
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it("rejects incomplete booking data", () => {
    const result = validateBookingPayload({ ...validPayload, preferredDate: "" });

    expect(result.ok).toBe(false);
    if (result.ok === false) expect(result.fields).toContain("preferredDate");
  });

  it("does not report success when email delivery is not configured", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    delete process.env.RESEND_API_KEY;
    const { response, state } = createResponse();

    await bookingHandler(
      {
        method: "POST",
        body: validPayload,
        headers: { origin: "https://nexar.example", host: "nexar.example" },
      },
      response,
    );

    expect(state.statusCode).toBe(503);
    expect(state.body).toEqual({ ok: false, error: "delivery_unavailable" });
  });

  it("sends a validated request to Resend with an idempotency key", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: "email_123" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );
    vi.stubGlobal("fetch", fetchMock);
    const { response, state } = createResponse();

    await bookingHandler(
      {
        method: "POST",
        body: validPayload,
        headers: { origin: "https://nexar.example", host: "nexar.example" },
      },
      response,
    );

    expect(state.statusCode).toBe(200);
    expect(state.body).toEqual({ ok: true, id: "email_123" });
    expect(fetchMock).toHaveBeenCalledOnce();

    const [, options] = fetchMock.mock.calls[0];
    expect(options.headers["Idempotency-Key"]).toBe(`booking-${validPayload.requestId}`);
    expect(JSON.parse(options.body)).toMatchObject({
      to: ["garage@example.com"],
      reply_to: "jan@example.com",
    });
  });
});
