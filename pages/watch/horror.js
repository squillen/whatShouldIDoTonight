import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Horror shows and movies to scare yourself with tonight',
  description: 'Hidden gem horror movies, international, foreign, scary on Netflix, Hulu, and Prime',
  header: 'Horror',
  tag: "There's no greater way to feel alive than feeling like you might scare yourself to death. These are some seriously scary shows and movies to watch right now.",
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="horror"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
