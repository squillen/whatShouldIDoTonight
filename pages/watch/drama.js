import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Less-known dramas to make you feel tonight',
  header: 'Drama',
  tag: "Sometimes life isn't dramatic enough /s When you feel like feeling just a little more, dramas are what you gotta watch. Here are some of the best ones out there that you've probably/hopefully never heard of!",
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="drama"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
