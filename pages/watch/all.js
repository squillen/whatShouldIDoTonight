import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// HELPERS
import GetAllEvents from '../../components/GetAllEvents/GetAllEvents'

const categoryDescriptions = {
  action: { title: 'Less-known actions shows / movies to save your night', header: 'Action', tag: 'Sometimes you just want to feel like a badass. Or at least you want to watch someone else be a badass. These are those badass things to watch.' },
  drama: { title: 'Less-known dramas to make you feel tonight', header: 'Drama', tag: "Sometimes life isn't dramatic enough /s When you feel like feeling just a little more, dramas are what you gotta watch. Here are some of the best ones out there that you've probably/hopefully never heard of!" },
  horror: { title: 'Horror shows and movies to scare yourself with tonight', header: 'Horror', tag: "There's no greater way to feel alive than feeling like you might scare yourself to death. These are some seriously scary shows and movies to watch right now." },
  comedy: { title: 'Less-watched comedies to laugh to tonight', header: 'Comedy', tag: "Is laughing ever not a good thing? Ok, maybe not funerals. Or when you see your partner naked. Ok, fine, there are lots of times you shouldn't laugh. But tonight isn't one of those times." },
  documentary: { title: 'Less-watched documentaries to think to tonight', header: 'Documentary', tag: "Documentaries just make you feel smart. It could be a documentary about the history of boy bands and it'll still give you a smug sense of superiority. Here are a couple docs (yea, we say docs, too, 'cuz smug) to get your brain thinking." },
}

function Content () {
  const router = useRouter()
  let { category } = router.query
  const [categoryInfo, setCategoryInfo] = useState({})

  useEffect(() => {
    if (category && !categoryInfo.header) setCategoryInfo(categoryDescriptions[category.toLowerCase()])
  }, [category])

  if (category === 'selfimprovement') category = 'selfImprovement'
  return (
    <GetAllEvents
      categoryInfo={categoryInfo}
      source="watch"
      category={category}
    />
  )
}

Content.propTypes = {
  activities: PropTypes.object,
}

export default connect((state) => state)(Content)
