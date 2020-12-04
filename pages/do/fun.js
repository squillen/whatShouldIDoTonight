import React from 'react'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'
import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const year = new Date().getFullYear()
const categoryInfo = {
  title: 'Fun things to do tonight',
  description: `Familiar classic games and best new games of ${year}. Have fun tonight!`,
  header: 'Fun',
  tag: 'Nights are when the stress of the day is done with and finally get a chance to relax and have fun. These are the things you should do.',
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
          category="fun"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default connect((state) => state)(Content)
