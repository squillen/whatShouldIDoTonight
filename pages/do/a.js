import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'

// HELPERS
import { getActivityFromDB } from '../../lib/helpers/db/requests'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'
import ArticleDisplay from '../../components/ArticleDisplay/ArticleDisplay'

function Content () {
  const [activity, setActivity] = useState({})
  const router = useRouter()
  const { lookup } = router.query
  const getActivity = async () => {
    try {
      const newActivity = await getActivityFromDB('do', lookup)
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
  Activity: PropTypes.object,
}

export default connect((state) => state)(Content)
