# Nexar Garage Wroclaw

Marketing website for Nexar Garage in Wroclaw built with React, TypeScript, Vite and Tailwind CSS.

## Booking form email delivery

The booking form sends requests through the Vercel Function at `/api/booking` and Resend. Configure these server-side environment variables in Vercel before publishing:

- `RESEND_API_KEY`
- `BOOKING_FROM_EMAIL` — a sender on a domain verified in Resend
- `BOOKING_TO_EMAIL` — one address or a comma-separated list of recipients
- `BOOKING_ALLOWED_ORIGIN` — optional fixed production origin

Copy `.env.example` for the required variable names. The form never shows a success message unless Resend returns a delivery ID.
