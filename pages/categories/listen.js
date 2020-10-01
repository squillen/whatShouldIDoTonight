import React, { useRef } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
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
  let comedy = []
  let technology = []
  let educational = []
  let finance = []
  let code = []
  let crime = []
  let food = []
  let selfImprovement = []
  let spooky = []

  try {
    const handleCall = (path) => callAPI(`listen?${path}`).catch(console.error)
    const promises = await Promise.all([
      handleCall('spotlight=spotlight'),
      handleCall('category=comedy'),
      handleCall('category=tech'),
      handleCall('category=educational'),
      handleCall('category=finance'),
      handleCall('category=code'),
      handleCall('category=crime'),
      handleCall('category=food'),
      handleCall('category=selfImprovement'),
      handleCall('category=spooky')
    ])
    spotlight = promises[0]
    comedy = promises[1]
    technology = promises[2]
    educational = promises[3]
    finance = promises[4]
    code = promises[5]
    crime = promises[6]
    food = promises[7]
    selfImprovement = promises[8]
    spooky = promises[9]
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      comedy,
      technology,
      educational,
      finance,
      code,
      crime,
      food,
      selfImprovement,
      spooky
    }
  }
}

function Listen ({
  spotlight,
  comedy,
  technology,
  educational,
  finance,
  code,
  crime,
  food,
  selfImprovement,
  spooky
}) {
  const source = 'listen'
  const contentCategories = [
    { content: comedy, header: 'Comedy', source, ref: useRef('Comedy') },
    { content: technology, header: 'Tech', source, ref: useRef('Tech') },
    { content: spooky, header: 'Spooky', source, ref: useRef('Spooky') },
    { content: educational, header: 'Educational', source, ref: useRef('Educational') },
    { content: finance, header: 'Finance', source, ref: useRef('Finance') },
    { content: code, header: 'Code', source, ref: useRef('Code') },
    { content: crime, header: 'Crime', source, ref: useRef('Crime') },
    { content: food, path: 'food', header: 'Food & Drink', source, ref: useRef('Food & Drink') }
  ]

  const findCallOut = coll => coll && Array.isArray(coll) && coll.find(item => item.spotlight !== true)
  const codeCallOut = findCallOut(code)
  const crimeCallOut = findCallOut(crime)
  const selfImprovementCallOut = findCallOut(selfImprovement)
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent1 = contentCategories.slice(0, 2).map(displayContent)
  const displayedContent2 = contentCategories.slice(2, 3).map(displayContent)
  const displayedContent3 = contentCategories.slice(3, 5).map(displayContent)
  const displayedContent4 = contentCategories.slice(5, 8).map(displayContent)
  const displayedContent5 = contentCategories.slice(8, 10).map(displayContent)
  const displayedContent6 = contentCategories.slice(10, 30).map(displayContent)
  const LBJ = {
    header: '"You aren’t learning anything when you’re talking."',
    contents: ['-Lyndon B. Johnson']
  }
  const Buddha = {
    header: '"The quieter you become, the more you can hear."',
    contents: ['-Buddha']
  }
  return (
    <Layout>
      <Head>
        <title>What to listen to - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Listen to quality" source={source} />
        <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Do you know how many bad podcasts are out there?</div>
          <div className={utilStyles.infoBody}>
            <p>We do. And now you don&apos;t have to.</p>
            <p>You&apos;re welcome.</p>
          </div>
        </div>
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent1}
        <ContentCallOut source="listen" item={selfImprovementCallOut} />
        {displayedContent2}
        <ContentCallOut item={Buddha} />
        {displayedContent3}
        <ContentCallOut source="listen" item={codeCallOut} />
        {displayedContent4}
        {
          displayedContent5.length
            ? (
              <>
                <ContentCallOut source="listen" item={crimeCallOut} />
                {displayedContent5}
              </>
            )
            : null
        }
        {
          displayedContent6.length
            ? (
              <>
                <ContentCallOut item={LBJ} />
                {displayedContent6}
              </>
            )
            : null
        }
      </div>
    </Layout>
  )
}

Listen.propTypes = {
  spotlight: PropTypes.array,
  comedy: PropTypes.array,
  technology: PropTypes.array,
  educational: PropTypes.array,
  finance: PropTypes.array,
  code: PropTypes.array,
  crime: PropTypes.array,
  food: PropTypes.array,
  selfImprovement: PropTypes.array,
  spooky: PropTypes.array
}

export default Listen
