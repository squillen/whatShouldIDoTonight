import React, { useEffect } from 'react'
import styles from './GoogleAd.module.css'

export default function GoogleAd ({ type = 'square' }) {
  useEffect(() => {
    const googleSyndicationScript = document.createElement('script')
    const googleSyndicationSrc = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    googleSyndicationScript.src = googleSyndicationSrc
    googleSyndicationScript.async = true

    const adsByGoogleScript = document.createElement('script')
    adsByGoogleScript.type = 'text/javascript'
    const adsByGoogleText = '(adsbygoogle = window.adsbygoogle || []).push({})'
    adsByGoogleScript.text = adsByGoogleText
    document.body.appendChild(adsByGoogleScript)

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
