import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'The hidden gems on Netflix, Hulu, Prime, and more to watch tonight',
  header: 'The Stuff To Stream',
  tag: "What're you in the mood for? Don't know? We got you. Here are a smattering of ideas we have for things to watch right now to fit any mood you have. Happy watching, nighty.",
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="ideas"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
