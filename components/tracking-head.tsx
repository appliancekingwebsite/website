import { tracking } from "@/lib/business";

/**
 * Rendered directly inside <head>. One Google tag per page (Google Ads + optional GA4),
 * plus Meta Pixel and Microsoft UET when their IDs are configured.
 */
export function TrackingHead() {
  const { googleTagId, ga4MeasurementId, metaPixelId, microsoftUetId, clarityId } = tracking;

  const gtagInline = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${googleTagId}');${
    ga4MeasurementId ? `gtag('config','${ga4MeasurementId}');` : ""
  }`;

  const metaInline = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');var x;try{x=localStorage.getItem('ak_ext_id');if(!x){x=(crypto.randomUUID?crypto.randomUUID():Date.now()+'-'+Math.random());localStorage.setItem('ak_ext_id',x);}}catch(e){}fbq('init','${metaPixelId}',x?{external_id:x}:{});`;

  const uetInline = `(function(w,d,t,u,o){w[u]=w[u]||[],o.ts=(new Date).getTime();var n=d.createElement(t);n.src="https://bat.bing.net/bat.js?ti="+o.ti+("uetq"!=u?"&q="+u:""),n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&"loaded"!==s&&"complete"!== s||(o.q=w[u], w[u]=new UET(o), w[u].push("pageLoad"), n.onload=n.onreadystatechange=null)};var i=d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n,i);})(window, document, "script", "uetq", {ti:"${microsoftUetId}",enableAutoSpaTracking:true});`;

  const uetConsentDefault = `window.uetq=window.uetq||[];window.uetq.push('consent', 'default', {'ad_storage': 'denied'});`;

  const clarityInline = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${clarityId}");`;

  return (
    <>
      {/* Google tag (gtag.js) */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
      <script dangerouslySetInnerHTML={{ __html: gtagInline }} />
      {metaPixelId && <script dangerouslySetInnerHTML={{ __html: metaInline }} />}
      {microsoftUetId && (
        <>
          <script dangerouslySetInnerHTML={{ __html: uetInline }} />
          <script dangerouslySetInnerHTML={{ __html: uetConsentDefault }} />
        </>
      )}
      {clarityId && <script dangerouslySetInnerHTML={{ __html: clarityInline }} />}
    </>
  );
}
