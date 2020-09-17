
import App from 'next/app'
import Router from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { AnimatePresence } from 'framer-motion'
import { initGA, logPageView } from '../utils/analytics'
import wrapper from '../src/store/store'
import '../styles/globals.css'

class MyApp extends App {
  componentDidMount () {
    initGA()
    logPageView()
    Router.events.on('routeChangeComplete', logPageView)
  }

  render () {
    const { Component, pageProps, router } = this.props
    return (
      <AnimatePresence>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    )
  }
}

export default wrapper.withRedux(MyApp)
