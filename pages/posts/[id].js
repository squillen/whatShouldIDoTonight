import Head from 'next/head'
import { getAllActivityIds, getSpecificActivityData } from '../../lib/posts'
import Layout from '../../components/layout/layout'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticPaths() {
  const paths = getAllActivityIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getSpecificActivityData(params)
  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}