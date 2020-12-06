import React from 'react'
import PropTypes from 'prop-types'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'
import { getAllCollectionActivitiesWithCategories } from '../../lib/helpers/db/requests'

const categoryInfo = {
  title: 'Tasty food and drink ideas to try tonight',
  description: "Wondering which alcoholic drinks or non-alcoholic drinks to make tonight? Wondering which recipes to try or hobbies to get into? We've got you covered!",
  header: 'Food & Drink',
  tag: 'Batman and Robin, peanut butter and jelly, nights and food. Some pairings just work. Check out all these fun food things you can do. Tonight!',
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
          category="food"
        />
      )
      : null
  )
}

Content.propTypes = {
  activities: PropTypes.array,
}

export default Content
