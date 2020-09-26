import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

// REDUX
import { connect } from 'react-redux'

// COMPONENTS
import Layout from '../../components/layout/layout'
import Loading from '../../components/loading/loading'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import handleMarkdown from '../../lib/helpers/handleMarkdown'

function Content () {
  const [activity, setActivity] = useState(null)
  const getActivity = async () => {
    try {
      const router = useRouter()
      const { id } = router.query
      const activity = await callAPI(`eat?id=${id}`)
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
          ? (
            <div className={utilStyles.pageContainer}>
              <div className={utilStyles.pageHeaderContainer}>
                <div
                  className={utilStyles.imageBanner}
                  style={{ background: `url(${activity.image}) center no-repeat` }}
                >
                  <div className={utilStyles.overlay} />
                  <div className={utilStyles.pageActivityName}>{activity.name}</div>
                </div>
              </div>
              <div className={utilStyles.pageBodyContainer}>
                <div className={utilStyles.backButton}>
                  <Link href="/categories/listen" prefetch={true} passHref>
                    <a className={utilStyles.backButton}>
                      <span><i className="fas fa-arrow-left"></i><span className={utilStyles.backText}>back</span></span>
                    </a>
                  </Link>
                </div>
                {
                  activity.TLDR
                    ? (
                      <div className={utilStyles.TLDR}>
                        <div className={utilStyles.TLDRHeader}>TL;DR:</div>
                        <div className={utilStyles.TLDRText}>{handleMarkdown(activity.TLDR)}</div>
                      </div>
                    )
                    : null
                }
                <div className={utilStyles.pageBodyNotes}>
                  <div className={utilStyles.pageBodyText}>
                    {handleMarkdown(activity.body)}
                  </div>
                </div>
              </div>
            </div>
          )
          : <Loading />
      }

    </Layout>
  )
}

Content.propTypes = {
  activity: PropTypes.object
}

export default connect((state) => state)(Content)
