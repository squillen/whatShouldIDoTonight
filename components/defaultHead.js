import Head from 'next/head'
export const siteTitle = 'What Should I Do Tonight - Fun, entertaining things we can do, watch, eat, drink, learn, and listen to right now'
export const baseDescription = "Need to know what to do when you're bored? Find free things to do tonight at home or outside and things to do near me tonight."
const description = baseDescription + 'Find what to watch on Netflix, Hulu, Prime, shows, movies, podcasts to listen to, online courses to learn, books, recipes, and more.'
// const mailChimpScript = `
//   !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/42fd643d25e61b586e6992d41/c722f51a5614f406bcfbd1aa9.js")
// `

const image = '/logos/logo.png'

export default function DefaultHead () {
  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      {/* PRIMARY META TAGS */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      {/* FACEBOOK / OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://whatshouldidotonight.com/" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* TWITTER */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://whatshouldidotonight.com/" />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image}></meta>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {/* <script id="mcjs" dangerouslySetInnerHTML={{ __html: mailChimpScript }} /> */}
      {/* <script data-ad-client="ca-pub-9045195637006996" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
    </Head>
  )
}
