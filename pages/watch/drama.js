import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'Less-known dramas to make you feel tonight',
  description: 'Hidden gem dramas movies shows to make you feel and cry on Netflix, Hulu, and Prime',
  header: 'Drama',
  tag: "Sometimes life isn't dramatic enough /s When you feel like feeling just a little more, dramas are what you gotta watch. Here are some of the best ones out there that you've probably/hopefully never heard of!",
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
      category="drama"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default connect((state) => state)(Content)
