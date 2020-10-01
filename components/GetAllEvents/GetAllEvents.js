import React, { useState } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../layout/layout'
import DisplayAllEvents from '../DisplayAllEvents/DisplayAllEvents'

// HELPERS
import callAPI from '../../lib/helpers/callAPI'

function GetAllEvents ({ header = 'Things To Do', source, category, back }) {
  const [allActivities, setAllActivities] = useState([])
  const [calledAPI, setCalledAPI] = useState(false)
  const getAllActivities = async () => {
    try {
      const allActivities = await callAPI(`${source}?category=${category}`)
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
      <DisplayAllEvents
        activities={allActivities}
        header={header}
        source={source}
        back={back}
      />
    </Layout>
  )
}

GetAllEvents.propTypes = {
  back: PropTypes.func,
  category: PropTypes.string,
  header: PropTypes.string,
  source: PropTypes.string
}

export default connect((state) => state)(GetAllEvents)
