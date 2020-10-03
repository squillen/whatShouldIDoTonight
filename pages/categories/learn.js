import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import Head from 'next/head'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import { siteTitle } from '../../components/defaultHead'
import ContentCallOut from '../../components/ContentCallOut/ContentCallOut'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import displayContent from '../../lib/helpers/displayContent'
import displayCategoryOptions from '../../lib/helpers/displayCategoryOptions'
import { stagger } from '../../animations/default'
import { slice } from '../../lib/helpers/dataHelpers'

export async function getStaticProps () {
  let spotlight = []
  let all = []
  let free = []

  try {
    const handleCall = (path) => callAPI(`learn?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('free=free'),
      handleCall('all=all')
    ])
    spotlight = promises[0]
    free = promises[1]
    all = promises[2]
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      all,
      free
    }
  }
}

function LearnSection ({ spotlight, all, free }) {
  const obj = all || {}
  const { art, code, finance, food, selfImprovement } = obj
  const source = 'learn'
  const contentCategories = [
    { content: slice(art), header: 'Art', source, ref: useRef('Art') },
    { content: slice(code), header: 'Coding', source, ref: useRef('Coding') },
    { content: slice(selfImprovement), path: 'selfImprovement', header: 'Self Improvement', source, ref: useRef('Self Improvement') },
    { content: slice(finance), header: 'Finance', source, ref: useRef('Finance') },
    { content: slice(free), header: 'Free', source, ref: useRef('Free') },
    { content: slice(food), path: 'food', header: 'Food & Drink', source, ref: useRef('Food & Drink') }
  ]
  const findCallOut = coll => coll && Array.isArray(coll) && coll.find(item => item.spotlight !== true)
  const codeCallOut = findCallOut(code)
  const selfImprovementCallOut = findCallOut(selfImprovement)
  const foodCallOut = findCallOut(food)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 2).map(displayContent)
  const displayedContent2 = contentCategories.slice(2, 4).map(displayContent)
  const displayedContent3 = contentCategories.slice(4, 6).map(displayContent)
  const displayedContent4 = contentCategories.slice(6, 9).map(displayContent)
  const displayedContent5 = contentCategories.slice(9, 14).map(displayContent)
  const displayedContent6 = contentCategories.slice(14, 30).map(displayContent)
  const markTwain = {
    header: '"Never let formal education get in the way of your learning."',
    contents: ['-Mark Twain']
  }
  const yogiBerra = {
    header: '"If you come to a fork in the road, take it."',
    contents: ['-Yogi Berra']
  }
  const albertEinstein = {
    header: '"Any fool can know. The point is to understand."',
    contents: ['-Albert Einstein', 'What a genius.']
  }
  return (
    <Layout>
      <Head>
        <title>What to learn - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        {spotlight && <SplashContent content={spotlight} banner="Be better than yesterday" source={source} />}
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Hand-picked courses worth the watch.</div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut source={source} item={selfImprovementCallOut} />
        {displayedContent2}
        <ContentCallOut item={markTwain} />
        {displayedContent3}
        <ContentCallOut source={source} item={codeCallOut} />
        {displayedContent4}
        {
          displayedContent5.length
            ? (
              <>
                <ContentCallOut item={albertEinstein} />
                {displayedContent5}
              </>
            )
            : null
        }
        {
          displayedContent6.length
            ? (
              <>
                <ContentCallOut source={source} item={foodCallOut} />
                {displayedContent6}
              </>
            )
            : null
        }
      </div>
    </Layout>
  )
}

LearnSection.propTypes = {
  spotlight: PropTypes.array,
  all: PropTypes.object,
  art: PropTypes.array,
  code: PropTypes.array,
  finance: PropTypes.array,
  food: PropTypes.array,
  selfImprovement: PropTypes.array,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default LearnSection
