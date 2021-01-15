import React from 'react'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../../../components/layout/layout'
import Loading from '../../../../components/loading/loading'

// HELPERS
import { getActivityFromDB } from '../../../../lib/helpers/db/requests'
import ContentDisplay from '../../../../components/ContentDisplay/ContentDisplay'
import ArticleDisplay from '../../../../components/ArticleDisplay/ArticleDisplay'

// export async function getStaticPaths () {
//   return {
//     paths: [
//       { params: { lookup: '*' } },
//     ],
//     fallback: true,
//   }
// }

// export async function getStaticProps (context) {
//   const lookup = context.params.lookup
//   const activity = await getActivityFromDB('do', lookup)
//   return {
//     props: {
//       activity,
//     },
//   }
// }

export async function getServerSideProps (context) {
  const lookup = context.params.lookup
  const activity = await getActivityFromDB('do', lookup)
  return {
    props: {
      activity,
    },
  }
}

function Content ({ activity }) {
  return (
    <Layout>
      {
        activity && activity._id
          ? activity.article
            ? <ArticleDisplay article={activity} source={'do'} />
            : <ContentDisplay content={activity} />
          : <Loading loading={true} />
      }
    </Layout>
  )
}

Content.propTypes = {
  activity: PropTypes.object,
}

export default Content
