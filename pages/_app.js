
import App from 'next/app'
import Router from 'next/router'
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
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(MyApp)
