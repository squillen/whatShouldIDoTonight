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
  const [activities, setActivities] = useState(null)
  const getActivities = async () => {
    try {
      const router = useRouter()
      const { category = '' } = router.query
      let activities = []
      if (category) activities = await callAPI(`eat?category=${category}`)
      setActivities(activities)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activities) getActivities()
  return (
    <Layout>
      read category!
    </Layout>
  )
}

Content.propTypes = {
  activities: PropTypes.object
}

export default connect((state) => state)(Content)
