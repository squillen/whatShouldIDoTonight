import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'
import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

// HELPERS
import callAPI from '../../lib/helpers/callAPI'
import handleMarkdown from '../../lib/helpers/handleMarkdown'
import handleSeasons from '../../lib/helpers/handleSeasons'

function Content () {
  const [activity, setActivity] = useState(null)
  const router = useRouter()
  const { id } = router.query
  const getActivity = async () => {
    try {
      const activity = await callAPI(`watch?id=${id}`)
      const markdownTLDR = await handleMarkdown(activity.TLDR)
      const markdownBody = await handleMarkdown(activity.body)
      activity.markdownTLDR = markdownTLDR
      activity.markdownBody = markdownBody
      setActivity(activity)
    } catch (e) {
      console.error(e)
    }
  }
  if (!activity) getActivity()
  return (
    <Layout>
      {
        activity
          ? <ContentDisplay content={activity} back={router.back} />
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  show: PropTypes.object
}

export default connect((state) => state)(Content)
