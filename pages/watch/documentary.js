import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Less-watched documentaries to think to tonight',
  header: 'Documentary',
  tag: "Documentaries just make you feel smart. It could be a documentary about the history of boy bands and it'll still give you a smug sense of superiority. Here are a couple docs (yea, we say docs, too, 'cuz smug) to get your brain thinking.",
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="documentary"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
