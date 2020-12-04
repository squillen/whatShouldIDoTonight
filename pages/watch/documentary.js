import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'Less-watched documentaries to think to tonight',
  description: 'Hidden gem documentaries to make you think, learn, grow on Netflix, Hulu, and Prime',
  header: 'Documentary',
  tag: "Documentaries just make you feel smart. It could be a documentary about the history of boy bands and it'll still give you a smug sense of superiority. Here are a couple docs (yea, we say docs, too, 'cuz smug) to get your brain thinking.",
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
      category="documentary"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default connect((state) => state)(Content)
