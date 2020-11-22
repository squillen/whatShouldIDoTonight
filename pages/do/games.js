import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Fun game ideas to try tonight',
  header: 'Games',
  tag: "Nights are made for fun. Games are fun. It's almost like nights were meant for games?!",
}

function Content () {
  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          category="games"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
