import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'whatshouldidotonight.com'
export const siteTitle = 'What Should I Do Tonight?'
const description = "What Should I Do Tonight helps you find things to do, tonight! Do free things or do things that cost money. Do things alone or do things with others. Just find fun, easy, and attainable things to do right now! Have fun tonight!";
const image = "/logos/logo.png";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
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
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/logos/logo.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/logos/logo.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}