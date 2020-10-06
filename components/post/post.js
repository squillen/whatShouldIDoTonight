import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArticleJsonLd } from 'next-seo'
import PropTypes from 'prop-types'
import Head from 'next/head'

// HELPERS
import { motion } from 'framer-motion'
import { fadeInUp, stagger, fadeInFromLeft, fadeIn } from '../../animations/default'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNewUserActivity, resetAll, restoreUserActivities } from '../../src/store/activities/action'

// COMPONENTS
import { siteTitle, description } from '../../components/defaultHead'
import Layout from '../../components/layout/layout'
import Button from '../../components/button/button'
import SocialIcons from '../../components/socialIcons/socialIcons'
import utilStyles from '../../styles/utils.module.css'

function Post (props) {
  const {
    title: pageTitle,
    content,
    timeToComplete,
    noOfPeople = '1+',
    pageInfo = {}
  } = props
  const { tags = '', pageDescription = pageTitle, publishedTime = new Date() } = pageInfo
  const pageTags = [...tags.split('/'), 'what', 'should', 'i', 'do', 'tonight', 'fun', 'activities', 'to']
  const router = useRouter()
  const state = useSelector(state => state)
  const [nextActivity, setNextActivity] = useState({})
  const [landedFromWeb, setLandedFromWeb] = useState(false)

  // EFFECTS
  // get next activity on load
  useEffect(() => {
    if (!nextActivity.id) {
      props.getNewUserActivity()
    }
  }, [pageTitle])

  // got a new activity, set it as nextActivity
  useEffect(() => {
    setNextActivity(state.activity.currentActivity)
  }, [state.activity.currentActivity])

  // no more activities, so we need to reset
  useEffect(() => {
    if (!state.activity.originalUserActivities.length) return setLandedFromWeb(true)
    if (!state.activity.userActivities.length) {
      props.restoreUserActivities()
      props.getNewUserActivity()
    }
  }, [state.activity.userActivities])

  // FUNCTIONS
  function resetOptions () {
    // reset redux state
    props.resetAll()
    router.push('/')
  }

  // HTML
  const tellMeAnotherButton = (
    <div className={utilStyles.buttonContainer}>
      {
        landedFromWeb
          ? null
          : (
            <Button
              size="large"
              label="tell me another"
              href={`/activities${nextActivity.category}/${nextActivity.id}`}
            />
          )
      }
    </div>
  )

  const url = 'https://www.whatshouldidotonight.com/'
  const pageURL = `${url}${router.pathname}`

  return (
    <Layout home>
      <Head>
        <title>{pageTitle} - {siteTitle}</title>
      </Head>
      <ArticleJsonLd
        title={siteTitle}
        description={description}
        canonical={url}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          url: pageURL,
          type: 'article',
          article: {
            publishedTime,
            tags: [...pageTags]
          },
          images: [
            {
              url: `${url}/images/seo/logo`,
              width: 850,
              height: 650,
              alt: 'Photo of text'
            }
          ]
        }}
      />
      <motion.div className={utilStyles.postContainer} exit={{ opacity: 0 }} variants={stagger}>
        {/* <BackButton onClick={router.back} /> */}
        {/* <header> */}
        <motion.div variants={stagger} className={utilStyles.headerContainer}>
          <motion.div variants={fadeInFromLeft} className={utilStyles.headingXl}>{pageTitle}</motion.div>
          <motion.div variants={fadeInFromLeft} className={utilStyles.underline} />
          <motion.div variants={stagger} className={utilStyles.headerInfoSection}>
            {/* LEFT SECTION */}
            <motion.div variants={stagger} className={utilStyles.leftSection}>
              <motion.div variants={fadeInFromLeft} className={utilStyles.noOfPeople}>
                <span className={utilStyles.infoIcon}><i className="fas fa-users"></i></span>
                {noOfPeople}
              </motion.div>
              <motion.div variants={fadeInFromLeft} className={utilStyles.timeToComplete}>
                <span>
                  <span className={utilStyles.infoIcon}><i className="fas fa-clock"></i></span>
                  {timeToComplete}
                </span>
              </motion.div>
              <motion.div variants={fadeInFromLeft} className={utilStyles.timeToComplete}>
                <SocialIcons pageURL={pageURL} pageTitle={pageTitle} />
              </motion.div>
            </motion.div>
            {/* END LEFT SECTION */}
            <motion.div variants={fadeIn} className={utilStyles.rightSection}>
              {tellMeAnotherButton}
            </motion.div>
          </motion.div>
          {/* <div className={utilStyles.underline} /> */}
        </motion.div>
        {/* </header> */}
        <div className={utilStyles.articleContainer}>
          <article>
            <motion.div variants={fadeInUp} className={utilStyles.content}>
              {content}
            </motion.div>
          </article>
        </div>
        <Button
          size="resetButton"
          onClick={resetOptions}
          label="reset"
        />
      </motion.div>
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewUserActivity: bindActionCreators(getNewUserActivity, dispatch),
    restoreUserActivities: bindActionCreators(restoreUserActivities, dispatch),
    resetAll: bindActionCreators(resetAll, dispatch)
  }
}

Post.propTypes = {
  getNewUserActivity: PropTypes.func,
  restoreUserActivities: PropTypes.func,
  resetAll: PropTypes.func,
  title: PropTypes.string,
  pageInfo: PropTypes.object,
  tags: PropTypes.string,
  path: PropTypes.string,
  pageDescription: PropTypes.string,
  content: PropTypes.object,
  noOfPeople: PropTypes.string,
  timeToComplete: PropTypes.string.isRequired,
  currentID: PropTypes.string
}

export default connect((state) => state, mapDispatchToProps)(Post)
