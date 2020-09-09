import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

// REDUX
import { connect, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getNewUserActivity, resetAll, restoreUserActivities } from '../../../../src/store/activities/action'

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
      fromWeb: true,
      pageActivity: pageActivity || {}
    }
  }
}

function Post (props) {
  const { pageActivity } = props
  const router = useRouter()
  const state = useSelector(state => state)
  const [nextActivity, setNextActivity] = useState({})
  const [fromWeb, setFromWeb] = useState(props.fromWeb)

  // EFFECTS
  useEffect(() => {
    props.getNewUserActivity()
  }, [pageActivity.id])

  useEffect(() => {
    if (!state.activity.currentActivity.title) {
      return
    }
    setFromWeb(false)
    setNextActivity(state.activity.currentActivity)
  }, [state.activity.currentActivity])

  useEffect(() => {
    if (!fromWeb && !state.activity.userActivities.length) {
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
  const buttons = (
    <div className={utilStyles.buttonContainer}>
      <Button

        inlineStyle={{ border: '1px solid red' }}
        onClick={resetOptions}
        label="reset"

      />
      {
        fromWeb
          ? null
          : (
            <Button
              inlineStyle={{ fontSize: '1.2rem', border: '2px solid black' }}
              label="tell me another"
              href="/posts/[category]/[costType]/[id]"
              as={`/posts${nextActivity.category}/${nextActivity.id}`}
            />
          )
      }
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
    restoreUserActivities: bindActionCreators(restoreUserActivities, dispatch),
    resetAll: bindActionCreators(resetAll, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Post)
