import Script from 'next/script';

export function AnalyticsScripts() {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
      <Script id="ga" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
        gtag('config', 'AW-XXXXXXXXX');`}
      </Script>
    </>
  );
}
