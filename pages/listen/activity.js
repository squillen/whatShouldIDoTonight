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
import callAPI from '../../lib/helpers/callAPI'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

function Content () {
  const [activity, setActivity] = useState(null)
  const getActivity = async () => {
    try {
      const router = useRouter()
      const { id = '' } = router.query
      let activity = {}
      if (id) activity = await callAPI(`listen?id=${id}`)
      setActivity(activity)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activity) getActivity()
  return (
    <Layout>
      {
        activity
          ? <ContentDisplay source={activity} back="/categories/listen" />
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  activity: PropTypes.object
}

export default connect((state) => state)(Content)
