import React, { useEffect } from 'react'

export default function HorizontalGoogleAd () {
  useEffect(() => {
    const googleSyndicationScript = document.createElement('script')
    googleSyndicationScript.src = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    googleSyndicationScript.async = true
    googleSyndicationScript.defer = true

    const adsByGoogleScript = document.createElement('script')
    adsByGoogleScript.type = 'text/javascript'
    adsByGoogleScript.text = '(adsbygoogle = window.adsbygoogle || []).push({})'
    document.body.appendChild(adsByGoogleScript)

    // return () => {
    //   document.body.removeChild(googleSyndicationScript)
    //   document.body.removeChild(adsByGoogleScript)
    // }
  }, [])

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9045195637006996"
      data-ad-slot="3553119086"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  )
}
