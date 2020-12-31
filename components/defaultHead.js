import PropTypes from 'prop-types'
import Head from 'next/head'
import { handleName } from '../lib/helpers/dataHelpers'
export const siteTitle = 'Find what to watch, do, learn, and improve tonight'
export const baseDescription = ' Need to know what to do when you&apos;re bored? Find free things to do tonight at home or outside and things to do near me tonight. '
const mailChimpScript = `
  !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/42fd643d25e61b586e6992d41/c722f51a5614f406bcfbd1aa9.js")
`
const googleTabManagerScript = `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5Z75ZBR')
`

export default function DefaultHead ({ title, description }) {
  const currentDescription = description || 'Find what to watch on Netflix, Hulu, Prime, shows, movies, podcasts to listen to, online courses to learn, books, recipes, and more.'
  const usedTitle = handleName(title) || siteTitle
  return (
    <Head>
      <script dangerouslySetInnerHTML={{ __html: googleTabManagerScript }} />
      <link rel="icon" href="/favicon.ico" />
      {/* PRIMARY META TAGS */}
      <title>{usedTitle}</title>
      <meta name="title" content={usedTitle} />
      <meta name="description" content={currentDescription} />
      <script id="mcjs" dangerouslySetInnerHTML={{ __html: mailChimpScript }} />
      <script data-ad-client="ca-pub-9045195637006996" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <link rel="preconnect" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
    </Head>
  )
}

DefaultHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
