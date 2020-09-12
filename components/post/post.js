import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUsers } from '@fortawesome/free-solid-svg-icons'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNewUserActivity, resetAll, restoreUserActivities } from '../../src/store/activities/action'

// COMPONENTS
import { siteTitle } from '../../components/defaultHead'
import Layout from '../../components/layout/layout'
import Button from '../../components/button/button'
import utilStyles from '../../styles/utils.module.css'

function Post (props) {
  const { title: pageTitle, content, timeToComplete, noOfPeople = '1+' } = props
  const router = useRouter()
  const state = useSelector(state => state)
  const [nextActivity, setNextActivity] = useState({})
  const [landedFromWeb, setLandedFromWeb] = useState(false)

  // EFFECTS
  // get next activity on load
  useEffect(() => {
    props.getNewUserActivity()
  }, [pageTitle])

  // set next activity
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
    // props.resetAll()
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
              inlineStyle={{
                fontSize: '1.2rem',
                border: '2px solid #262626',
                width: '14rem',
                height: '3.3rem'
              }}
              label="tell me another"
              href={`/activities${nextActivity.category}/${nextActivity.id}`}
            />
          )
      }
    </div>
  )

  return (
    <Layout>
      <Head>
        <title>{pageTitle} - {siteTitle}</title>
      </Head>
      <div className={utilStyles.postContainer}>
        <div className={utilStyles.articleContainer}>
          <article>
            <header>
              <div className={utilStyles.headerContainer}>
                <div className={utilStyles.headingXl}>{pageTitle}</div>
                <div className={utilStyles.underline} />
                <div className={utilStyles.headerInfoSection}>
                  <div className={utilStyles.timeToComplete}>
                    <span>
                      <span className={utilStyles.infoIcon}><FontAwesomeIcon icon={faClock} size="s" /></span>
                      {timeToComplete}
                    </span>
                  </div>
                  <div className={utilStyles.noOfPeople}>
                    <span className={utilStyles.infoIcon}><FontAwesomeIcon icon={faUsers} size="s" /></span>
                    {noOfPeople}
                  </div>
                </div>
                <div className={utilStyles.underline} />
              </div>
            </header>
            <div className={utilStyles.content}>
              {content}
            </div>
          </article>
          {tellMeAnotherButton}
        </div>
        <Button
          inlineStyle={{ border: '1px solid red', width: '10rem', height: '2rem' }}
          onClick={resetOptions}
          label="reset"
        />
      </div>
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
  content: PropTypes.object,
  timeToComplete: PropTypes.string.isRequired,
  noOfPeople: PropTypes.string
}

export default connect((state) => state, mapDispatchToProps)(Post)
