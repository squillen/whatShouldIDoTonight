import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArticleJsonLd } from 'next-seo'
import PropTypes from 'prop-types'
import { siteTitle, description } from './defaultHead'

export default function ArticleHead ({ activity = {} }) {
  const router = useRouter()
  const url = 'https://whatshouldidotonight.com'
  const pageURL = `${url}${router.pathname}`
  const pageDescription = activity.pageDescription || description
  const datePublished = (activity._id && new Date(parseInt(activity._id.substring(0, 8), 16) * 1000)) || new Date()
  const dateModified = activity.dateModified || new Date()
  const title = activity.name || activity.title || activity.tagline
  const categories = activity.categories || []
  return (
    <>
      <Head>
        <title>{title} - {siteTitle}</title>
      </Head>
      <ArticleJsonLd
        url={pageURL}
        title={title}
        images={[activity.image]}
        authorName={activity.authorName || 'Sean Quillen'}
        datePublished={datePublished}
        dateModified={dateModified}
        description={pageDescription}
        canonical={url}
        openGraph={{
          title: title,
          description: pageDescription,
          url: pageURL,
          type: 'article',
          article: {
            publishedTime: datePublished,
            tags: [...categories],
          },
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
    </>
  )
}

ArticleHead.propTypes = {
  activity: PropTypes.obj,
}
