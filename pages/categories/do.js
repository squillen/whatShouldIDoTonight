import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import PropTypes from 'prop-types'

// COMPONENTS
import Layout from '../../components/layout/layout'
import SplashContent from '../../components/SplashContent/SplashContent'
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import displayContent from '../../lib/helpers/displayContent'
import displayCategoryOptions from '../../lib/helpers/displayCategoryOptions'
import { stagger } from '../../animations/default'

export async function getStaticProps () {
  let spotlight = []
  let food = []
  let finance = []
  let code = []
  let educational = []
  let tech = []
  let selfImprovement = []
  let social = []
  let home = []
  let volunteer = []
  let listen = []
  let watch = []
  let calm = []
  let alone = []
  let read = []
  let free = []
  let outside = []
  let active = []

  try {
    spotlight = await callAPI('do?spotlight=spotlight')
    food = await callAPI('do?limit=10&category=food')
    educational = await callAPI('do?limit=10&category=educational')
    listen = await callAPI('do?limit=10&category=listen')
    free = await callAPI('do?free=free')
    calm = await callAPI('do?limit=10&category=calm')
    alone = await callAPI('do?limit=10&category=alone')
    watch = await callAPI('do?limit=10&category=watch')
    volunteer = await callAPI('do?limit=10&category=volunteer')
    home = await callAPI('do?limit=10&category=home')
    read = await callAPI('do?limit=10&category=read')
    social = await callAPI('do?limit=10&category=social')
    finance = await callAPI('do?limit=10&category=finance')
    code = await callAPI('do?limit=10&category=code')
    tech = await callAPI('do?limit=10&category=tech')
    outside = await callAPI('do?limit=10&category=outside')
    active = await callAPI('do?limit=10&category=active')
    selfImprovement = await callAPI('do?limit=10&category=selfImprovement')
  } catch (e) {
    console.error(e)
  }
  return {
    props: {
      spotlight,
      food,
      outside,
      active,
      listen,
      calm,
      free,
      alone,
      watch,
      read,
      home,
      social,
      volunteer,
      finance,
      code,
      tech,
      educational,
      selfImprovement
    }
  }
}

function DoSection ({ spotlight, active, educational, outside, free, alone, read, home, volunteer, listen, watch, calm, social, food, finance, code, tech, selfImprovement }) {
  const source = 'do'
  const contentCategories = [
    { content: active, header: 'Active', source, ref: useRef('Active') },
    { content: alone, header: 'Alone', source, ref: useRef('Alone') },
    { content: calm, path: 'calm', header: 'Chill', source, ref: useRef('Chill') },
    { content: code, header: 'Code', source, ref: useRef('Code') },
    { content: educational, header: 'Educational', source, ref: useRef('Educational') },
    { content: finance, header: 'Finance', source, ref: useRef('Finance') },
    { content: food, path: 'food', header: 'Eat', source, ref: useRef('Eat') },
    { content: free, header: 'Free', source, ref: useRef('Free') },
    { content: home, header: 'Home', source, ref: useRef('Home') },
    { content: listen, header: 'Listen', source, ref: useRef('Listen') },
    { content: outside, header: 'Outside', source, ref: useRef('Outside') },
    { content: read, path: 'read', header: 'Read & Write', source, ref: useRef('Read & Write') },
    { content: selfImprovement, path: 'selfImprovement', header: 'Self Improvement', source, ref: useRef('Self Improvement') },
    { content: social, header: 'Social', source, ref: useRef('Social') },
    { content: tech, header: 'Tech', source, ref: useRef('Tech') },
    { content: volunteer, header: 'Volunteer', source, ref: useRef('Volunteer') },
    { content: watch, header: 'Watch', source, ref: useRef('Watch') }
  ]
  const categoryOptions = contentCategories.map(displayCategoryOptions)
  const displayedContent = contentCategories.map(displayContent)

  return (
    <Layout>
      <Head>
        <title>What to do - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <SplashContent content={spotlight} banner="Do worthwhile shit" destination={source} />
        {/* <div className={utilStyles.infoContainer}>
          <div className={utilStyles.infoHeader}>Stuff you can do right now.</div>
        </div> */}
        <motion.div variants={stagger} className={utilStyles.categoryOptions}>
          {categoryOptions}
        </motion.div>
        {displayedContent}
      </div>
    </Layout>
  )
}

DoSection.propTypes = {
  spotlight: PropTypes.array,
  tech: PropTypes.array,
  code: PropTypes.array,
  food: PropTypes.array,
  finance: PropTypes.array,
  social: PropTypes.array,
  selfImprovement: PropTypes.array
}

export default DoSection
