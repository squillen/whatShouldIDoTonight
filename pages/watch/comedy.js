import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'Less-watched comedies to laugh to tonight',
  description: 'Hidden gem comedies movies, absurd humor, sketch, british on Netflix, Hulu, and Prime',
  header: 'Comedy',
  tag: "Is laughing ever not a good thing? Ok, maybe not funerals. Or when you see your partner naked. Ok, fine, there are lots of times you shouldn't laugh. But tonight isn't one of those times.",
}

export async function getStaticProps () {
  const activities = await getAllCollectionActivitiesWithCategories('watch')
  return {
    props: {
      activities,
    },
  }
}

function Content ({ activities }) {
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      activities={activities}
      category="comedy"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default connect((state) => state)(Content)
