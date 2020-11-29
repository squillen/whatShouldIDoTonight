import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'
const year = new Date().getFullYear()
const categoryInfo = {
  title: 'Fun things to do tonight',
  description: `Familiar classic games and best new games of ${year}. Have fun tonight!`,
  header: 'Fun',
  tag: 'Nights are when the stress of the day is done with and finally get a chance to relax and have fun. These are the things you should do.',
}

function Content () {
  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          category="fun"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
