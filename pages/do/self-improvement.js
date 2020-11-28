import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Ideas to improve yourself and grow as a person',
  header: 'Self Improvement',
  description: 'Bored at home and want to improve yourself? Become an even better person tonight by checking out these articles on self-improvement.',
  tag: "Whether you believe it or not, you're awesome. And you can become even more awesome! Awesome! How? By checking out all of our articles!",
}

function Content () {
  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          category="self-improvement"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
