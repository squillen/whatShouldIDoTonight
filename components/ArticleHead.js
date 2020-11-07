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
  const expirationDate = activity.expirationDate || null
  const title = activity.name || activity.title || activity.tagline || siteTitle
  const categories = activity.categories || []
  const tags = activity.tags || []
  const authors = [activity.authorName || 'Sean Quillen']
  return (
    <>
      <Head>
        <title>{title} - {siteTitle}</title>
      </Head>
      <ArticleJsonLd
        url={pageURL}
        title={title}
        images={[activity.image]}
        authorName={authors}
        datePublished={datePublished}
        dateModified={dateModified}
        description={pageDescription}
        canonical={url}
        publisherName="What Should I Do Tonight"
        publisherLogo='https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/seo/logo.png'
        openGraph={{
          title: title,
          description: pageDescription,
          url: pageURL,
          type: 'article',
          article: {
            publishedTime: datePublished,
            modifiedTime: dateModified,
            expirationTime: expirationDate,
            authors: authors,
            tags: [...categories, ...tags],
          },
          images: [
            {
              url: activity.image || 'https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/seo/logo.png',
              width: 850,
              height: 650,
              alt: `${title}`,
            },
          ],
        }}
      />
    </>
  )
}

ArticleHead.propTypes = {
  activity: PropTypes.object,
}
