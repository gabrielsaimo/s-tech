"use client";

import Script from "next/script";

import { useCookieConsent } from "@/components/ui/CookieConsent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function ConsentAwareTracking() {
  const { hasConsent, canUseAnalytics, canUseMarketing } = useCookieConsent();

  const shouldLoadGA = Boolean(hasConsent && canUseAnalytics && GA_ID);
  const shouldLoadMetaPixel = Boolean(hasConsent && canUseMarketing && META_PIXEL_ID);

  return (
    <>
      {shouldLoadGA && (
        <>
          <Script
            id="ga4-gtag-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {shouldLoadMetaPixel && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              (function(f,b,e,v,n,t,s){
                if(f.fbq) return;
                n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments) : n.queue.push(arguments)};
                if(!f._fbq) f._fbq=n;
                n.push=n; n.loaded=true; n.version='2.0'; n.queue=[];
                t=b.createElement(e); t.async=true;
                t.src=v;
                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              })(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}
    </>
  );
}
