import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: "Fun ideas for things to do when you're alone",
  header: 'Alone',
  tag: "Whether you're happy that you're alone tonight or not, we've got something for you.",
}

function Content () {
  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          category="alone"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
