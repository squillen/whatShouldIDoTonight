import { NextSeo } from 'next-seo'
import { siteTitle, baseDescription } from './defaultHead'
export default function NextSEO ({ url, title, description, canonical, noindex = false, nofollow = false }) {
  const additionalMetaTags = "things to do/bored/what to do when you're bored/help/fun/activities/free/paid/do stuff/tonight/what should i do tonight/what should i do".split('/')
  return (
    <NextSeo
      noindex={noindex}
      nofollow={nofollow}
      title={title || siteTitle}
      description={`${description} ${baseDescription}`}
      openGraph={{
        url,
        additionalMetaTags,
        description: baseDescription,
        title: siteTitle,
        canonical: canonical || url,
        site_name: 'What Should I Do Tonight',
        images: [
          {
            url: 'https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/seo/logo.png',
            width: 850,
            height: 650,
            alt: 'What Should I Do Tonight Logo',
          },
        ],
      }}
    />
  )
}
