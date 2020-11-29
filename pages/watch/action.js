import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Less-known actions shows / movies to save your night',
  description: 'Hidden gem action movies, international thrillers on Netflix, Hulu, and Prime',
  header: 'Action',
  tag: 'Sometimes you just want to feel like a badass. Or at least you want to watch someone else be a badass. These are those badass things to watch.',
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="action"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
