import { NextSeo } from 'next-seo'
import { handleName } from '../lib/helpers/dataHelpers'
import { siteTitle, baseDescription } from './defaultHead'
export default function NextSEO ({ url, title, description, canonical, noindex = false, nofollow = false }) {
  const usedTitle = handleName(title) || siteTitle
  return (
    <NextSeo
      noindex={noindex}
      nofollow={nofollow}
      title={usedTitle}
      description={description}
      canonical={canonical || url}
      openGraph={{
        url,
        description: description || baseDescription,
        title: usedTitle,
        canonical: canonical || url || 'https://whatshouldidotonight.com',
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
      twitter={{
        handle: '@doTonightdotcom',
        site: 'https://twitter.com/doTonightdotcom',
        description: description || baseDescription,
        title: usedTitle,
        cardType: 'summary_large_image',
      }}
    />
  )
}
