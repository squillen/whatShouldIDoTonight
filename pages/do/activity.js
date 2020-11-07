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
  const [activity, setActivity] = useState(null)
  const router = useRouter()
  const { name } = router.query
  const getActivity = async () => {
    try {
      const newActivity = await getActivityFromDB('do', name)
      setActivity(newActivity)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (!activity && name) getActivity()
  }, [name])
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
  Activity: PropTypes.object,
}

export default connect((state) => state)(Content)
