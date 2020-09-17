
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AnimatePresence } from 'framer-motion'
import * as gtag from '../lib/gtag'
import wrapper from '../src/store/store'
import '../styles/globals.css'

const App = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <AnimatePresence>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default wrapper.withRedux(App)
