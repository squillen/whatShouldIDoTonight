import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryInfo = {
  title: 'Less-watched comedies to laugh to tonight',
  header: 'Comedy',
  tag: "Is laughing ever not a good thing? Ok, maybe not funerals. Or when you see your partner naked. Ok, fine, there are lots of times you shouldn't laugh. But tonight isn't one of those times.",
}

function Content () {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category="comedy"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
