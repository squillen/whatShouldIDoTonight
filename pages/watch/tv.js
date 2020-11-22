import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'The hidden gems on Netflix, Hulu, Prime, and more to watch tonight',
  header: 'The Stuff To Stream',
  tag: "Whether you're in the mood for movies, shows, shorts, or vignettes, we've got you covered for all the best hidden gems on Netflix, Hulu, Prime, and more. Let the watching commence.",
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="tv"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
