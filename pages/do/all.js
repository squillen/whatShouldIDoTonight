import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryDescriptions = {
  'self-improvement': { title: 'Ideas to improve yourself and grow as a person', header: 'Self Improvement', tag: "Whether you believe it or not, you're awesome. And you can become even more awesome! Awesome! How? By checking out all of our articles!" },
  learn: { title: 'Fun courses and apps to learn from tonight', header: 'Learn', tag: "Nights are the time to hone your skills and learn new ones. Of course, watching TV is fine, we've got a whole page dedicated to it, in fact! But taking time out to learn sets you apart from most. You've got this." },
  food: { title: 'Tasty food and drink ideas to try tonight', header: 'Food & Drink', tag: 'Batman and Robin, peanut butter and jelly, nights and food. Some pairings just work. Check out all these fun food things you can do. Tonight!' },
  alone: { title: "Fun ideas for things to do when you're alone", header: 'Alone', tag: "Whether you're happy that you're alone tonight or not, we've got something for you." },
  games: { title: 'Fun game ideas to try tonight', header: 'Games', tag: "Nights are made for fun. Games are fun. It's almost like nights were meant for games?!" },
}

function Content () {
  const router = useRouter()
  let { category } = router.query
  const [categoryInfo, setCategoryInfo] = useState({})

  useEffect(() => {
    if (category && !categoryInfo.header) setCategoryInfo(categoryDescriptions[category.toLowerCase()])
  }, [category])

  return (
    categoryInfo.header
      ? (
        <GetAllEvents
          categoryInfo={categoryInfo}
          source="do"
          category={category}
        />
      )
      : null

  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
