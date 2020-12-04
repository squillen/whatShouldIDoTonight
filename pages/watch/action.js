import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'Less-known actions shows / movies to save your night',
  description: 'Hidden gem action movies, international thrillers on Netflix, Hulu, and Prime',
  header: 'Action',
  tag: 'Sometimes you just want to feel like a badass. Or at least you want to watch someone else be a badass. These are those badass things to watch.',
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
      activities={activities}
      source="watch"
      category="action"
    />
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default connect((state) => state)(Content)
