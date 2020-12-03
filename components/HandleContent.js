import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

// COMPONENTS
import ContentCallOut from './ContentCallOut/ContentCallOut'

// HELPERS
import displayContent from '../lib/helpers/displayContent'
import displayCategoryOptions from '../lib/helpers/displayCategoryOptions'
import { slice, findCallOut } from '../lib/helpers/dataHelpers'
import { stagger } from '../animations/default'
import utilStyles from '../styles/utils.module.css'

const specialCase = {
  'self-improvement': { name: 'Self Improvement' },
  tv: { name: 'TV' },
  food: { name: 'Food & Drink ' },
  // total: { name: 'All' },
}

export default function HandleContent ({ all, source, quotes = [], homeRef, showCategories = true }) {
  const contentCategories = []
  const collections = []
  const handleCategory = (name, contents) => {
    collections.push([contents])
    if (name === '') name = 'free'
    const header = (name[0] && (name[0].toUpperCase() + name.slice(1, name.length))) || name
    const contentData = { content: slice(contents), header, source, homeRef, ref: useRef(header) }
    if (specialCase[name]) {
      const newHeader = specialCase[name].name
      contentData.header = newHeader
      contentData.ref = useRef(newHeader)
      contentData.homeRef = homeRef
      contentData.path = (specialCase[name].path || name).toLowerCase()
    }
    return contentData
  }

  for (const key in all) {
    contentCategories.push(handleCategory(key, all[key]))
  }

  // contentCategories.push(handleCategory('articles', articles))

  contentCategories.sort((a, b) => {
    if (a.header > b.header) return 1
    if (a.header < b.header) return -1
    return 0
  })

  const categoryOptions = contentCategories && contentCategories.map(displayCategoryOptions)
  const getRandomCategory = () => collections[Math.floor(Math.random() * collections.length)]
  const display = []
  let useQuote = false
  const listOfUsedCallOuts = []
  const quotesCopy = [...quotes]
  for (let i = 0; i < contentCategories.length; i++) {
    const currentDisplay = contentCategories.slice(i, i + 1)
    useQuote = i % 2 === 0
    const currentCallOut = findCallOut(...getRandomCategory(), listOfUsedCallOuts) || {}
    listOfUsedCallOuts.push(currentCallOut.name)
    let currentQuote = null
    if (useQuote && quotesCopy.length) {
      currentQuote = quotesCopy.splice(Math.floor(Math.random() * quotesCopy.length), 1)[0]
    }
    const currentContentCallOut = currentQuote
      ? <ContentCallOut key={`quotable-contentCallOut-${i}`} item={currentQuote} />
      : <ContentCallOut key={`contentCallOut-${i}`} source={source} item={currentCallOut} />
    if (useQuote) useQuote = false
    display.push((
      <>
        {currentDisplay.map(displayContent)}
        {currentContentCallOut}
      </>
    ))
  }
  return (
    <div className={utilStyles.pageContainer} key="Handle-Content-Key">
      {
        showCategories
          ? (
            <motion.div key="pageContainer" variants={stagger} className={utilStyles.categoryOptions}>
              {categoryOptions}
            </motion.div>
          )
          : null
      }
      {display}
    </div>
  )
}

HandleContent.propTypes = {
  all: PropTypes.object,
  articles: PropTypes.array,
  homeRef: PropTypes.object,
  source: PropTypes.string,
  quotes: PropTypes.array,
}
