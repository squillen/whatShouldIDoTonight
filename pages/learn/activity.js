import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

// HELPERS
import { getActivityFromDB } from '../../lib/helpers/db/requests'

function Content () {
  const [activity, setActivity] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const getActivity = async () => {
    try {
      const newActivity = await getActivityFromDB('learn', id)
      setActivity(newActivity)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (!activity && id) getActivity()
  }, [id])
  return (
    <Layout>
      {
        activity
          ? <ContentDisplay content={activity} />
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  activity: PropTypes.object,
}

export default connect((state) => state)(Content)
