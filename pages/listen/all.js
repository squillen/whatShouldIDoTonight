import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import DisplayAllEvents from '../../components/DisplayAllEvents/DisplayAllEvents'

// HELPERS
import callAPI from '../../lib/helpers/callAPI'

function Content () {
  const [activities, setActivities] = useState(null)
  let currentCategory = ''
  const getActivities = async () => {
    try {
      const router = useRouter()
      const { category } = router.query
      currentCategory = category
      const activities = await callAPI(`listen?category=${category}`)
      setActivities(activities)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activities) getActivities()
  return (
    <Layout>
      <DisplayAllEvents category={currentCategory} activities={activities} source="listen" />
    </Layout>
  )
}

Content.propTypes = {
  activities: PropTypes.object
}

export default connect((state) => state)(Content)
