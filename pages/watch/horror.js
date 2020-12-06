import React from 'react'
import PropTypes from 'prop-types'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'Horror shows and movies to scare yourself with tonight',
  description: 'Hidden gem horror movies, international, foreign, scary on Netflix, Hulu, and Prime',
  header: 'Horror',
  tag: "There's no greater way to feel alive than feeling like you might scare yourself to death. These are some seriously scary shows and movies to watch right now.",
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
      category="horror"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default Content
