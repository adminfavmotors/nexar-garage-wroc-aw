import { BatteryCharging, Gauge, Snowflake, Wrench } from "lucide-react";
import type { ServiceBookingValue } from "@/features/services/data/servicePages";

// One optical size and stroke weight for all six workshop services.
const iconProps = {
  width: 28,
  height: 28,
  strokeWidth: 1.75,
  "aria-hidden": true,
} as const;

export function ServiceIcon({ service }: { service: ServiceBookingValue }) {
  switch (service) {
    case "diagnostics":
      return <Gauge {...iconProps} />;
    case "repairs":
      return <Wrench {...iconProps} />;
    case "electrics":
      return <BatteryCharging {...iconProps} />;
    case "ac":
      return <Snowflake {...iconProps} />;
    case "tyres":
      return (
        <svg
          {...iconProps}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5.5" />
          <circle cx="12" cy="12" r="1.5" />
          <path d="M12 6.5v4m5.2-.2-3.8 1.2m1.8 4.9-2.3-3.2m-4.1 3.2 2.3-3.2m-4.3-2.9 3.8 1.2" />
        </svg>
      );
    case "alignment":
      return (
        <svg
          {...iconProps}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          focusable="false"
        >
          <rect
            x="3"
            y="5"
            width="4"
            height="7"
            rx="1"
            transform="rotate(-12 5 8.5)"
          />
          <rect
            x="17"
            y="5"
            width="4"
            height="7"
            rx="1"
            transform="rotate(12 19 8.5)"
          />
          <path d="M7.5 8.5h9M5 16v4m14-4v4M5 18h14m-7-4v-2" />
        </svg>
      );
  }
}
