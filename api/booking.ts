import { randomUUID } from "node:crypto";

type HeaderValue = string | string[] | undefined;

type ApiRequest = {
  method?: string;
  body?: unknown;
  headers: Record<string, HeaderValue>;
};

type ApiResponse = {
  setHeader: (name: string, value: string) => void;
  status: (statusCode: number) => ApiResponse;
  json: (body: unknown) => void;
};

type BookingData = {
  requestId: string;
  lang: "PL" | "EN";
  fullName: string;
  phone: string;
  email: string;
  vehicle: string;
  year: string;
  service: string;
  problem: string;
  preferredDate: string;
  notes: string;
  consent: true;
};

type ValidationResult =
  | { ok: true; data: BookingData }
  | { ok: false; fields: string[] };

const serviceLabels: Record<string, { pl: string; en: string }> = {
  diagnostics: { pl: "Diagnostyka komputerowa", en: "Computer diagnostics" },
  repairs: { pl: "Serwis i naprawy", en: "Service and repairs" },
  tyres: { pl: "Wymiana opon", en: "Tyre service" },
  electrics: { pl: "Elektryk samochodowy", en: "Auto electrics" },
  ac: { pl: "Klimatyzacja samochodowa", en: "Car air conditioning" },
  alignment: { pl: "Geometria kół", en: "Wheel alignment" },
  other: { pl: "Inne", en: "Other" },
};

const asText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const asObject = (value: unknown): Record<string, unknown> | null => {
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }

  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : null;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
const isRequestId = (value: string) => /^[a-zA-Z0-9-]{16,80}$/.test(value);

export const validateBookingPayload = (payload: unknown): ValidationResult => {
  const body = asObject(payload);
  if (!body) return { ok: false, fields: ["body"] };

  const requestId = asText(body.requestId);
  const lang = body.lang === "EN" ? "EN" : body.lang === "PL" ? "PL" : null;
  const fullName = asText(body.fullName);
  const phone = asText(body.phone);
  const email = asText(body.email);
  const vehicle = asText(body.vehicle);
  const year = asText(body.year);
  const service = asText(body.service);
  const problem = asText(body.problem);
  const preferredDate = asText(body.preferredDate);
  const notes = asText(body.notes);
  const fields: string[] = [];

  if (!isRequestId(requestId)) fields.push("requestId");
  if (!lang) fields.push("lang");
  if (fullName.length < 2 || fullName.length > 100) fields.push("fullName");
  if (phone.replace(/\D/g, "").length < 7 || phone.length > 30) fields.push("phone");
  if (email && (email.length > 160 || !isEmail(email))) fields.push("email");
  if (vehicle.length < 2 || vehicle.length > 100) fields.push("vehicle");
  if (year && !/^\d{4}$/.test(year)) fields.push("year");
  if (!(service in serviceLabels)) fields.push("service");
  if (service === "other" && (problem.length < 5 || problem.length > 1500)) fields.push("problem");
  if (!isDate(preferredDate)) fields.push("preferredDate");
  if (notes.length > 1500) fields.push("notes");
  if (body.consent !== true) fields.push("consent");

  if (fields.length > 0 || !lang) return { ok: false, fields };

  return {
    ok: true,
    data: {
      requestId,
      lang,
      fullName,
      phone,
      email,
      vehicle,
      year,
      service,
      problem,
      preferredDate,
      notes,
      consent: true,
    },
  };
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });

const getHeader = (headers: ApiRequest["headers"], name: string) => {
  const value = headers[name] ?? headers[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
};

const isAllowedOrigin = (request: ApiRequest) => {
  const origin = getHeader(request.headers, "origin");
  if (!origin) return true;

  const configuredOrigin = process.env.BOOKING_ALLOWED_ORIGIN;
  if (configuredOrigin) return origin === configuredOrigin;

  const host = getHeader(request.headers, "x-forwarded-host") ?? getHeader(request.headers, "host");
  if (!host) return false;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
};

const buildEmail = (data: BookingData) => {
  const service = serviceLabels[data.service];
  const serviceName = data.lang === "PL" ? service.pl : service.en;
  const rows = [
    ["Klient / Customer", data.fullName],
    ["Telefon / Phone", data.phone],
    ["E-mail", data.email || "—"],
    ["Auto / Vehicle", `${data.vehicle}${data.year ? ` (${data.year})` : ""}`],
    ["Usługa / Service", serviceName],
    ["Termin / Preferred date", data.preferredDate],
    ["Opis / Issue", data.problem || "—"],
    ["Uwagi / Notes", data.notes || "—"],
    ["Język / Language", data.lang],
  ];

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="padding:8px 12px;border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return {
    subject: `Nowe zgłoszenie: ${data.vehicle} — ${serviceName}`,
    text,
    html: `<h1 style="font-family:Arial,sans-serif">Nowe zgłoszenie serwisowe</h1><table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${htmlRows}</table>`,
  };
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  if (!isAllowedOrigin(request)) {
    return response.status(403).json({ ok: false, error: "origin_not_allowed" });
  }

  const body = asObject(request.body);
  if (!body) return response.status(400).json({ ok: false, error: "invalid_request" });

  if (asText(body.company)) {
    return response.status(200).json({ ok: true, id: randomUUID() });
  }

  const validation = validateBookingPayload(body);
  if (validation.ok === false) {
    return response.status(400).json({ ok: false, error: "invalid_request", fields: validation.fields });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.BOOKING_FROM_EMAIL;
  const recipients = process.env.BOOKING_TO_EMAIL?.split(",").map((email) => email.trim()).filter(Boolean);

  if (!apiKey || !from || !recipients?.length) {
    console.error("Booking email is not configured. Set RESEND_API_KEY, BOOKING_FROM_EMAIL and BOOKING_TO_EMAIL.");
    return response.status(503).json({ ok: false, error: "delivery_unavailable" });
  }

  const email = buildEmail(validation.data);

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `booking-${validation.data.requestId}`,
      },
      body: JSON.stringify({
        from,
        to: recipients,
        subject: email.subject,
        html: email.html,
        text: email.text,
        ...(validation.data.email ? { reply_to: validation.data.email } : {}),
      }),
    });

    const resendResult = (await resendResponse.json().catch(() => null)) as { id?: string } | null;
    if (!resendResponse.ok || !resendResult?.id) {
      console.error("Resend rejected a booking email.", { status: resendResponse.status });
      return response.status(502).json({ ok: false, error: "delivery_failed" });
    }

    return response.status(200).json({ ok: true, id: resendResult.id });
  } catch (error) {
    console.error("Booking email request failed.", error instanceof Error ? error.message : "Unknown error");
    return response.status(502).json({ ok: false, error: "delivery_failed" });
  }
}
