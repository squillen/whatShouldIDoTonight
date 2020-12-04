import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'

// HELPERS
import { getAllCollectionActivities } from '../../lib/helpers/db/requests'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'
import ArticleDisplay from '../../components/ArticleDisplay/ArticleDisplay'

export async function getStaticProps () {
  const allCollectionActivities = await getAllCollectionActivities('do')
  return {
    props: {
      allCollectionActivities,
    },
  }
}

function Content ({ allCollectionActivities }) {
  const [activity, setActivity] = useState({})
  const router = useRouter()
  const { lookup } = router.query
  const getActivity = async () => {
    try {
      const newActivity = allCollectionActivities.find(p => p.lookup === lookup)
      setActivity(newActivity)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (!activity._id && lookup) getActivity()
  }, [lookup])
  return (
    <Layout>
      {
        activity._id
          ? activity.article
            ? <ArticleDisplay article={activity} source={'do'} />
            : <ContentDisplay content={activity} />
          : <Loading loading={true} />
      }
    </Layout>
  )
}

Content.propTypes = {
  allCollectionActivities: PropTypes.array,
}

export default connect((state) => state)(Content)
