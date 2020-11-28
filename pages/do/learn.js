import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Fun courses and apps to learn from tonight',
  description: 'Find the best courses to learn about history, cultures, wine, beer, and how to code, cook and so much more.',
  header: 'Learn',
  tag: "Nights are the time to hone your skills and learn new ones. Of course, watching TV is fine, we've got a whole page dedicated to it, in fact! But taking time out to learn sets you apart from most. You've got this.",
}

function Content () {
  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          category="learn"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
