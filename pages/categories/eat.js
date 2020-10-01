import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import ContentCallOut from '../../components/ContentCallOut/ContentCallOut'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import displayContent from '../../lib/helpers/displayContent'
import displayCategoryOptions from '../../lib/helpers/displayCategoryOptions'
import { stagger } from '../../animations/default'

export async function getStaticProps () {
  let spotlight = []
  let all = []
  let indian = []
  let asian = []
  let american = []
  let italian = []
  let mexican = []
  let thai = []
  let japanese = []
  let chinese = []
  let dessert = []
  let recipe = []

  try {
    spotlight = await callAPI('eat?spotlight=spotlight')
    all = await callAPI('eat?limit=10&all=all')
    indian = await callAPI('eat?category=indian')
    asian = await callAPI('eat?category=asian')
    american = await callAPI('eat?category=american')
    italian = await callAPI('eat?category=italian')
    mexican = await callAPI('eat?category=mexican')
    thai = await callAPI('eat?category=thai')
    japanese = await callAPI('eat?category=japanese')
    chinese = await callAPI('eat?category=chinese')
    dessert = await callAPI('eat?category=dessert')
    recipe = await callAPI('eat?recipe=recipe')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      all,
      indian,
      asian,
      american,
      italian,
      mexican,
      thai,
      japanese,
      chinese,
      dessert,
      recipe
    }
  }
}

function TVSection ({ spotlight, all, indian, asian, american, italian, mexican, thai, japanese, chinese, dessert, recipe }) {
  const source = 'eat'
  const contentCategories = [
    { content: all, header: 'All', source, ref: useRef('All') },
    { content: indian, header: 'Indian', source, ref: useRef('Indian') },
    { content: asian, header: 'Asian', source, ref: useRef('Asian') },
    { content: american, header: 'American', source, ref: useRef('American') },
    { content: italian, header: 'Italian', source, ref: useRef('Italian') },
    { content: mexican, header: 'Mexican', source, ref: useRef('Mexican') },
    { content: thai, header: 'Thai', source, ref: useRef('Thai') },
    { content: japanese, header: 'Japanese', source, ref: useRef('Japanese') },
    { content: chinese, header: 'Chinese', source, ref: useRef('Chinese') },
    { content: dessert, header: 'Dessert', source, ref: useRef('Dessert') },
    { content: recipe, header: 'Recipes', source, ref: useRef('Recipes') }
  ]
  const findCallOut = coll => coll.find(item => item.spotlight !== true)
  const italianCallOut = findCallOut(italian)
  const japaneseCallOut = findCallOut(japanese)
  const dessertCallOut = findCallOut(dessert)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 3).map(displayContent)
  const displayedContent2 = contentCategories.slice(3, 6).map(displayContent)
  const displayedContent3 = contentCategories.slice(6, 9).map(displayContent)
  const displayedContent4 = contentCategories.slice(9, 12).map(displayContent)
  const displayedContent5 = contentCategories.slice(12, 14).map(displayContent)
  const displayedContent6 = contentCategories.slice(14, 30).map(displayContent)
  const doTheDew = {
    header: '"Butter"',
    contents: ['-How Paula Deen says basil.']
  }
  const justDoIt = {
    header: '"Doing something is better than doing nothing."',
    contents: ['-whatshouldidotonight.com', 'Come for the fun, stay for the knowledge.']
  }
  return (
    <Layout>
      <Head>
        <title>What to eat - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Hand-picked dishes" source={source} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>We found the recipes worth cooking. The diabetes was totally worth it.</div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut body={doTheDew} />
        {displayedContent2}
        <ContentCallOut source="eat" item={dessertCallOut} />
        {displayedContent3}
        <ContentCallOut source="eat" item={italianCallOut} />
        {displayedContent4}
        <ContentCallOut body={justDoIt} />
        {displayedContent5}
        <ContentCallOut source="eat" item={japaneseCallOut} />
        {displayedContent6}
      </div>
    </Layout>
  )
}

TVSection.propTypes = {
  all: PropTypes.array,
  spotlight: PropTypes.array,
  indian: PropTypes.array,
  asian: PropTypes.array,
  american: PropTypes.array,
  italian: PropTypes.array,
  mexican: PropTypes.array,
  thai: PropTypes.array,
  japanese: PropTypes.array,
  chinese: PropTypes.array,
  dessert: PropTypes.array
}

export default TVSection
