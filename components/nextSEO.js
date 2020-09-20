import { NextSeo } from 'next-seo'
import { siteTitle, description } from './defaultHead'
export default function NextSEO () {
  const additionalMetaTags = 'things to do/fun/activities/free/paid/do stuff/tonight/what should i do tonight/what should i do'.split('/')
  return (
    <NextSeo
      title={siteTitle}
      description={description}
      openGraph={{
        additionalMetaTags,
        description,
        title: siteTitle,
        url: 'https://www.whatshouldidotonight.com',
        type: 'video.movie',
        site_name: 'What Should I Do Tonight',
        images: [
          {
            url: 'https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/seo/logo.png',
            width: 500,
            height: 500,
            alt: 'What Should I Do Tonight Default Logo'
          }
        ]
      }}
    />
  )
}
