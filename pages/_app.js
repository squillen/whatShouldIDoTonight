
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo'
import PropTypes from 'prop-types'
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
      <Component {...pageProps} key={router.route} />
      {/* <h1 key="app_h1_seo" className="hidden">what to do when you're bored. what should i we do tonight? i we are bored.</h1> */}
    </AnimatePresence>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  router: PropTypes.object,
  pageProps: PropTypes.object,
}

export default wrapper.withRedux(App)
