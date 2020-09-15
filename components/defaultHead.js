import Head from 'next/head'
export const siteTitle = 'What Should I Do Tonight?'
const description = 'What Should I Do Tonight helps you find things to do, tonight! Do free things or do things that cost money. Do things alone or do things with others. Just find fun, easy, and attainable things to do right now! Have fun tonight!'
const image = '/logos/logo.png'

export default function DefaultHead () {
  return (
    <Head>
      <script data-ad-client="ca-pub-9045195637006996" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <link rel="icon" href="/favicon.ico" />
      <script data-ad-client="ca-pub-9045195637006996" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
      <script src="https://kit.fontawesome.com/986019369d.js" crossOrigin="anonymous"></script>
    </Head>
  )
}
