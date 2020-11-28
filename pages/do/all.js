import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryDescriptions = {
  'self-improvement': {
    title: 'Ideas to improve yourself and grow as a person',
    header: 'Self Improvement',
    description: 'Bored at home and want to improve yourself? Become an even better person tonight by checking out these articles on self-improvement.',
    tag: "Whether you believe it or not, you're awesome. And you can become even more awesome! Awesome! How? By checking out all of our articles!",
  },
  learn: {
    title: 'Fun courses and apps to learn from tonight',
    description: 'Find the best courses to learn about history, cultures, wine, beer, and how to code, cook and so much more.',
    header: 'Learn',
    tag: "Nights are the time to hone your skills and learn new ones. Of course, watching TV is fine, we've got a whole page dedicated to it, in fact! But taking time out to learn sets you apart from most. You've got this.",
  },
  food: {
    title: 'Tasty food and drink ideas to try tonight',
    description: "Wondering which alcoholic drinks or non-alcoholic drinks to make tonight? Wondering which recipes to try or hobbies to get into? We've got you covered!",
    header: 'Food & Drink',
    tag: 'Batman and Robin, peanut butter and jelly, nights and food. Some pairings just work. Check out all these fun food things you can do. Tonight!',
  },
  alone: {
    title: "Fun ideas for things to do when you're alone",
    description: "Don't just watch TV when you're bored and alone! Use this time effectively and learn and grow as a person. And then watch some TV!",
    header: 'Alone',
    tag: "Whether you're happy that you're alone tonight or not, we've got something for you.",
  },
  fun: {
    title: 'Fun things to do tonight',
    description: "Play some games that you know about and some that you've never heard of. Either way, you're having some fun tonight!",
    header: 'Fun',
    tag: 'Nights are when the stress of the day is done with and finally get a chance to relax and have fun. These are the things you should do.',
  },
}

function Content () {
  const router = useRouter()
  const { category } = router.query
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
