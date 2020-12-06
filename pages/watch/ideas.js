import React from 'react'
import PropTypes from 'prop-types'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'The hidden gems on Netflix, Hulu, Prime, and more to watch tonight',
  description: 'Our curated hidden gem suggestions on what to watch tonight',
  header: 'The Stuff To Stream',
  tag: "What're you in the mood for? Don't know? We got you. Here are a smattering of ideas we have for things to watch right now to fit any mood you have. Happy watching, nighty.",
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
      category="ideas"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default Content
