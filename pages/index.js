import Head from 'next/head'
import Layout from '../components/layout/layout'
import { siteTitle } from '../components/defaultHead'
import Logo from '../components/logo/logo'
import utilStyles from '../styles/utils.module.css'
import { getAllActivitiesData } from '../lib/posts'

export async function getStaticProps() {
  const allActivitiesData = getAllActivitiesData()
  console.log('allActivitiesData', allActivitiesData)
  return {
    props: {
      allActivitiesData
    }
  }
}

export default function Home({ allActivitiesData }) {
  console.log('allActivitiesData', allActivitiesData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>placeholder!</p>
        <p>
          this is going to be a great site!
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}