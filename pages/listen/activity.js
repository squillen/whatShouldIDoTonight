import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import { getActivityFromDB } from '../../lib/helpers/db/requests'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

function Content () {
  const [activity, setActivity] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const getActivity = async () => {
    try {
      const newActivity = await getActivityFromDB('listen', id)
      setActivity(newActivity)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activity && id) getActivity()
  return (
    <Layout>
      {
        activity
          ? <ContentDisplay content={activity} back={router.back} />
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  activity: PropTypes.object
}

export default connect((state) => state)(Content)
