import React from 'react'
import PropTypes from 'prop-types'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'
import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: "Fun ideas for things to do when you're alone",
  description: "Don't just watch TV when you're bored and alone! Use this time effectively and learn and grow as a person. And then watch some TV!",
  header: 'Alone',
  tag: "Whether you're happy that you're alone tonight or not, we've got something for you.",
}

export async function getStaticProps () {
  const activities = await getAllCollectionActivitiesWithCategories('do')
  return {
    props: {
      activities,
    },
  }
}

function Content ({ activities }) {
  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          activities={activities}
          category="alone"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default Content
