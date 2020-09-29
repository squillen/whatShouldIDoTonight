import PropTypes from 'prop-types'
import { siteTitle } from '../../components/defaultHead'
import Head from 'next/head'
import Link from 'next/link'

import utilStyles from '../../styles/utils.module.css'
import handleMarkdown from '../../lib/helpers/handleMarkdown'

export default function ContentDisplay ({ source = {}, back = '/' }) {
  return (
    <>
      <Head>
        <title>{source.name} - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <div className={utilStyles.pageHeaderContainer}>
          <div
            className={utilStyles.imageBanner}
            style={{ background: `url(${source.image}) center no-repeat` }}
          >
            <div className={utilStyles.overlay} />
            <div className={utilStyles.pageActivityName}>{source.name}</div>
          </div>
        </div>
        <div className={utilStyles.pageBodyContainer}>
          <div className={utilStyles.backButton}>
            <Link href={back}>
              <a className={utilStyles.backButton}>
                <span><i className="fas fa-arrow-left"></i><span className={utilStyles.backText}>back</span></span>
              </a>
            </Link>
          </div>
          {
            source.TLDR
              ? (
                <div className={utilStyles.TLDR}>
                  <div className={utilStyles.TLDRHeader}>TL;DR:</div>
                  <div className={utilStyles.TLDRText}>{handleMarkdown(source.TLDR)}</div>
                </div>
              )
              : null
          }
          <div className={utilStyles.pageBodyNotes}>
            <div className={utilStyles.pageBodyText}>
              {handleMarkdown(source.body)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ContentDisplay.propTypes = {
  source: PropTypes.object,
  back: PropTypes.string
}
