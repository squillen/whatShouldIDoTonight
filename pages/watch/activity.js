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
import { siteTitle } from '../../components/defaultHead'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import callAPI from '../../lib/helpers/callAPI'
import handleMarkdown from '../../lib/helpers/handleMarkdown'
import handleSeasons from '../../lib/helpers/handleSeasons'

function Content () {
  const [show, setShow] = useState(null)
  const getShow = async () => {
    try {
      const router = useRouter()
      const { id } = router.query
      const show = await callAPI(`watch?id=${id}`)
      setShow(show)
    } catch (e) {
      console.error(e)
    }
  }
  if (!show) getShow()
  return (
    <Layout>
      {
        show
          ? (
            <>
              <Head>
                <title>{show.name} - {siteTitle}</title>
              </Head>
              <div className={utilStyles.pageContainer}>
                <div className={utilStyles.pageHeaderContainer}>
                  <div
                    className={utilStyles.imageBanner}
                    style={{ background: `url(${show.image}) center no-repeat` }}
                  >
                    <div className={utilStyles.overlay} />
                    <div className={utilStyles.pageActivityName}>{show.name}</div>
                  </div>
                </div>
                <div className={utilStyles.pageBodyContainer}>
                  <div className={utilStyles.backButton}>
                    <Link href="/categories/activities">
                      <a className={utilStyles.backButton}>
                        <span><i className="fas fa-arrow-left"></i><span className={utilStyles.backText}>back</span></span>
                      </a>
                    </Link>
                  </div>
                  <div className={utilStyles.pageBodyNotes}>
                    <div className={utilStyles.pageHeader}>
                    Why you should watch:
                    </div>
                    <div className={utilStyles.pageBodyText}>
                      {handleMarkdown(show.body)}
                    </div>
                  </div>
                  <div className={utilStyles.seasonsToWatchContainer}>
                    <div className={utilStyles.pageHeader}>
                    Seasons to watch:
                    </div>
                    <div className={utilStyles.seasonsToWatchTable}>
                      {handleSeasons(show.seasonsToWatch, show.name)}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
          : <Loading />
      }
    </Layout>
  )
}

Content.propTypes = {
  show: PropTypes.object
}

export default connect((state) => state)(Content)
