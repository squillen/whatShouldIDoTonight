import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
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

function Content () {
  const [activity, setActivity] = useState({})
  const router = useRouter()
  const { name } = router.query
  const getActivity = async () => {
    try {
      const newActivity = await getActivityFromDB('read', name)
      setActivity(newActivity)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (!activity.name || activity.name !== name) getActivity()
  }, [name])
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
  activity: PropTypes.object
}

export default connect((state) => state)(Content)
