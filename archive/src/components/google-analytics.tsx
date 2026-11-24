import Script from "next/script";

/**
 * Google Analytics 4 (gtag.js) with Consent Mode v2 defaults and no banner:
 * EEA/UK/CH visitors default to denied (cookieless pings), everyone else to
 * granted. Rendered only on the Vercel production deployment, never locally
 * or on preview deployments. Vercel Web Analytics stays as it is alongside.
 * Page views on client-side navigation come from GA4 enhanced measurement.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-BQDZ0MG3FZ";

const CONSENT_REGIONS = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT",
  "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
];

export function GoogleAnalytics() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") return null;
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  analytics_storage: 'denied',
  region: ${JSON.stringify(CONSENT_REGIONS)},
  wait_for_update: 500
});
gtag('consent', 'default', {
  ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted',
  analytics_storage: 'granted'
});
gtag('js', new Date());
gtag('config', ${JSON.stringify(GA_ID)});`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
