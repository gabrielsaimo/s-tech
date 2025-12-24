"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { useCookieConsent } from "@/components/ui/CookieConsent";

export function ConsentAwareVercelAnalytics() {
  const { hasConsent, canUseAnalytics } = useCookieConsent();

  if (!hasConsent) return null;
  if (!canUseAnalytics) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
