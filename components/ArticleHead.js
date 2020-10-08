import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArticleJsonLd } from 'next-seo'
import PropTypes from 'prop-types'
import { siteTitle, description } from './defaultHead'

export default function ArticleHead ({ activity }) {
  const router = useRouter()
  const url = 'https://whatshouldidotonight.com'
  const pageURL = `${url}${router.pathname}`
  const pageDescription = activity.pageDescription || description
  const datePublished = (activity._id && new Date(parseInt(activity._id.substring(0, 8), 16) * 1000)) || new Date()
  const dateModified = activity.dateModified || new Date()
  return (
    <>
      <Head>
        <title>{activity.name} - {siteTitle}</title>
      </Head>
      <ArticleJsonLd
        url={pageURL}
        title={activity.name}
        images={[activity.image]}
        authorName={activity.authorName || 'Sean Quillen'}
        datePublished={datePublished}
        dateModified={dateModified}
        description={pageDescription}
        canonical={url}
        openGraph={{
          title: activity.name,
          description: pageDescription,
          url: pageURL,
          type: 'article',
          article: {
            publishedTime: datePublished,
            tags: [...activity.categories],
          },
          images: [
            {
              url: `${url}/images/seo/logo`,
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
