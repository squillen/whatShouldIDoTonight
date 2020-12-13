import React, { useEffect } from 'react'
import styles from './GoogleAd.module.css'

export default function GoogleAd ({ type = 'square' }) {
  useEffect(() => {
    const googleSyndicationSrc = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    const adsByGoogleText = '(adsbygoogle = window.adsbygoogle || []).push({})'
    let addSyndication = true
    let addAdsByGoogle = true
    const originalScripts = document.getElementsByTagName('script')
    for (let i = 0; i < originalScripts.length; i++) {
      const currentScript = originalScripts[i]
      if (currentScript.text === adsByGoogleText) {
        addAdsByGoogle = false
      }
      if (currentScript.src === googleSyndicationSrc) {
        addSyndication = false
      }
    }
    if (addAdsByGoogle) {
      const adsByGoogleScript = document.createElement('script')
      adsByGoogleScript.type = 'text/javascript'
      adsByGoogleScript.text = adsByGoogleText
      document.body.appendChild(adsByGoogleScript)
    }

    if (addSyndication) {
      const googleSyndicationScript = document.createElement('script')
      googleSyndicationScript.src = googleSyndicationSrc
      googleSyndicationScript.async = true
      document.body.appendChild(googleSyndicationScript)
    }

    return () => {
      const scripts = document.getElementsByTagName('script')
      for (let i = 0; i < scripts.length; i++) {
        const currentScript = scripts[i]
        if (currentScript.text === adsByGoogleText || currentScript.src === googleSyndicationSrc) {
          currentScript.parentNode.removeChild(currentScript)
        }
      }
    }
  }, [type])

  const square = (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9045195637006996"
      data-ad-slot="3423420280"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  )

  const inArticle = (
    <ins className="adsbygoogle"
      style={{ display: 'block', textAlign: 'center' }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-9045195637006996"
      data-ad-slot="1484524798"></ins>
  )

  const horizontal = (
    <ins className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-9045195637006996"
      data-ad-slot="3553119086"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  )
  const adTypes = { inArticle, square, horizontal }
  return (
    <div className={styles.adContainer}>
      {adTypes[type]}
    </div>
  )
}
