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
  const [allActivities, setAllActivities] = useState([])
  const [calledAPI, setCalledAPI] = useState(false)
  const getAllActivities = async () => {
    try {
      const router = useRouter()
      const { category } = router.query
      const allActivities = await callAPI(`do?category=${category}`)
      setAllActivities(allActivities)
    } catch (e) {
      console.error(e)
    } finally {
      setCalledAPI(true)
    }
  }
  if (!calledAPI && !allActivities.length) getAllActivities()
  return (
    <Layout>
      <DisplayAllEvents header="Do All the Stuff" activities={allActivities} source="do" />
    </Layout>
  )
}

Content.propTypes = {
  activities: PropTypes.object
}

export default connect((state) => state)(Content)
