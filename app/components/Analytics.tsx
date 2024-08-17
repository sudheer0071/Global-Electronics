import Script from "next/script"

export const Analytics = ()=>{
  return <>
   <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R8RX1RFL9Y" strategy="afterInteractive"></Script>
<Script id="google-analytics" strategy="afterInteractive" >
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-R8RX1RFL9Y');`}
</Script>
  </>
}