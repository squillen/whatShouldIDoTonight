import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAllActivityIds, getSpecificActivityData } from '../../../../lib/posts'
import Layout from '../../../../components/layout/layout'
import utilStyles from '../../../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllActivityIds()
  console.log('paths in getStaticPaths :::', paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // category, costType, id
  console.log('params in getStaticProps :::', params)
  const activity = await getSpecificActivityData(params)
  return {
    props: {
      activity
    }
  }
}

export default function Post({ activity }) {
  console.log('activity in Post :::', activity)
  return (
    <Layout>
      <Head>
        <title>{activity.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{activity.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: activity.contentHtml }} />
      </article>
    </Layout>
  )
}