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

export async function getStaticProps () {
  let spotlight = []
  let art = []
  let code = []
  let free = []
  let finance = []
  let food = []
  let selfImprovement = []

  try {
    spotlight = await callAPI('learn?spotlight=spotlight')
    free = await callAPI('learn?free=free')
    art = await callAPI('learn?category=art')
    code = await callAPI('learn?category=code')
    finance = await callAPI('learn?category=finance')
    food = await callAPI('learn?category=food')
    selfImprovement = await callAPI('learn?category=selfImprovement')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      art,
      code,
      free,
      finance,
      food,
      selfImprovement
    }
  }
}

function TVSection ({ spotlight, art, code, free, finance, food, selfImprovement }) {
  const source = 'learn'
  const contentCategories = [
    { content: art, header: 'Art', source, ref: useRef('Art') },
    { content: code, header: 'Coding', source, ref: useRef('Coding') },
    { content: selfImprovement, path: 'selfImprovement', header: 'Self Improvement', source, ref: useRef('Self Improvement') },
    { content: finance, header: 'Finance', source, ref: useRef('Finance') },
    { content: free, header: 'Free', source, ref: useRef('Free') },
    { content: food, path: 'food', header: 'Food & Drink', source, ref: useRef('Food & Drink') }
  ]
  const findCallOut = coll => coll.find(item => item.spotlight !== true)
  const codeCallOut = findCallOut(code)
  console.log('codeCallOut :>> ', codeCallOut)
  const selfImprovementCallOut = findCallOut(selfImprovement)
  const foodCallOut = findCallOut(food)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 2).map(displayContent)
  const displayedContent2 = contentCategories.slice(2, 4).map(displayContent)
  const displayedContent3 = contentCategories.slice(4, 6).map(displayContent)
  const displayedContent4 = contentCategories.slice(6, 9).map(displayContent)
  const displayedContent5 = contentCategories.slice(9, 14).map(displayContent)
  const displayedContent6 = contentCategories.slice(14, 30).map(displayContent)
  const doTheDew = {
    header: '"Do the Dew"',
    contents: ['-Mountain Dew', 'Straight wisdom.']
  }
  const justDoIt = {
    header: '"Doing something is better than doing nothing."',
    contents: ['-whatshouldidotonight.com', 'Come for the fun, stay for the knowledge.']
  }
  return (
    <Layout>
      <Head>
        <title>What to learn - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Be better than yesterday" source={source} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Hand-picked courses that&apos;re worth the watch.</div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut source="learn" item={selfImprovementCallOut} />
        {displayedContent2}
        <ContentCallOut body={doTheDew} />
        {displayedContent3}
        <ContentCallOut source="learn" item={codeCallOut} />
        {displayedContent4}
        {
          displayedContent5.length
            ? (
              <>
                <ContentCallOut body={justDoIt} />
                {displayedContent5}
              </>
            )
            : null
        }
        {
          displayedContent6.length
            ? (
              <>
                <ContentCallOut source="learn" item={foodCallOut} />
                {displayedContent6}
              </>
            )
            : null
        }
      </div>
    </Layout>
  )
}

TVSection.propTypes = {
  spotlight: PropTypes.array,
  art: PropTypes.array,
  code: PropTypes.array,
  finance: PropTypes.array,
  food: PropTypes.array,
  selfImprovement: PropTypes.array,
  free: PropTypes.array,
  ideas: PropTypes.array
}

export default TVSection
