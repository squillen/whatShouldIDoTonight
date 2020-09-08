import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNewUserActivity, restoreUserActivities } from '../../../../src/store/activities/action'

// HELPERS
import { getAllActivityIds, getSpecificActivityData } from '../../../../lib/posts'

// COMPONENTS
import Layout from '../../../../components/layout/layout'
import Button from '../../../../components/button/button'
import utilStyles from '../../../../styles/utils.module.css'

export async function getStaticPaths () {
  const paths = getAllActivityIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const pageActivity = await getSpecificActivityData(params)
  return {
    props: {
      pageActivity: pageActivity || {}
    }
  }
}

function resetOptions () {
  // reset redux state
  // router.push to home
}

function Post (props) {
  const { pageActivity } = props
  const state = useSelector(state => state)
  const [nextActivity, setNextActivity] = useState({})

  // EFFECTS
  useEffect(() => {
    props.getNewUserActivity()
  }, [pageActivity.id])

  useEffect(() => {
    if (!state.activity.currentActivity.title) {
      return
    }
    setNextActivity(state.activity.currentActivity)
  }, [state.activity.currentActivity])

  useEffect(() => {
    if (!state.activity.userActivities.length) {
      props.restoreUserActivities()
      props.getNewUserActivity()
    }
  }, [state.activity.userActivities])

  // HTML
  const buttonLabel = Object.keys(pageActivity).length ? 'tell me another' : 'tell me'
  const buttons = (
    <div className={utilStyles.buttonContainer}>
      {
        Object.keys(pageActivity).length
          ? (
            <Button
              styleName={utilStyles.resetButton}
              onClick={resetOptions}
              label="reset"
            />
          )
          : null
      }
      <Button
        label={<Link href={`/posts${nextActivity.category}/${nextActivity.id}`}><a>{buttonLabel}</a></Link>}
      />
    </div>
  )

  return (
    <Layout>
      <Head>
        <title>{pageActivity.title}</title>
      </Head>
      {buttons}
      <article>
        <h1 className={utilStyles.headingXl}>{pageActivity.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageActivity.contentHtml }} />
      </article>
    </Layout>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewUserActivity: bindActionCreators(getNewUserActivity, dispatch),
    restoreUserActivities: bindActionCreators(restoreUserActivities, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Post)
