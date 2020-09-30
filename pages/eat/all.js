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
  const getActivities = async () => {
    try {
      const router = useRouter()
      const { category } = router.query
      const activities = await callAPI(`eat?category=${category}`)
      setActivities(activities)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activities) getActivities()
  return (
    <Layout>
      <DisplayAllEvents header="Eat all the things!" activities={activities} source="eat" />
    </Layout>
  )
}

Content.propTypes = {
  activities: PropTypes.object
}

export default connect((state) => state)(Content)
