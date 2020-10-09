import PropTypes from 'prop-types'
import { siteTitle } from '../../components/defaultHead'
import Head from 'next/head'

// COMPONENTS
import BackButton from '../BackButton/BackButton'

// HELPERS
import utilStyles from '../../styles/utils.module.css'
import handleMarkdown from '../../lib/helpers/handleMarkdown'

function handleBody (body = [], activityName) {
  return body && body.map((obj, idx) => (
    <>
      <div key={`${activityName}-${obj.name}`} className={utilStyles.sectionContainer}>
        <div className={utilStyles.sectionHeader}>
          <div className={utilStyles.blob}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FA4D56" d="M56.2,-28.5C66.9,-13.9,65.5,11.5,54.1,34.7C42.7,57.9,21.4,78.9,3.4,76.9C-14.6,75,-29.2,50.1,-38.2,28.3C-47.2,6.5,-50.5,-12.3,-43.2,-24.9C-36,-37.5,-18,-43.9,2.4,-45.3C22.8,-46.7,45.5,-43.1,56.2,-28.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          <span>
            <span className={utilStyles.firstLetter}>{obj.name[0]}</span>
            <span>{obj.name.slice(1, obj.name.length)}</span>
          </span>

        </div>
        <div className={utilStyles.sectionBody}>
          {
            obj.contents.map(text => (
              <div key={text.slice(0, 10)} className={utilStyles.bodyContents}>{handleMarkdown(text)}</div>
            ))
          }
        </div>
      </div>
      {idx !== body.length - 1 && <div className={utilStyles.dividerContainer}><div className={utilStyles.divider}/></div>}
    </>
  ))
}

function handleInfo (content = {}) {
  const imdb = content && content.imdb
  return (
    <div className={utilStyles.headerInfo}>
      <div className={utilStyles.categories}>({content.categories.join(', ')})</div>
      {
        imdb &&
          (
            <div className={utilStyles.showDetails}>

              <div className={utilStyles.showRating}>
                <div className={utilStyles.labelSection}>
                  <img className={utilStyles.labelSectionImg} src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"/>
                </div>
                <div className={utilStyles.ratingSection}>
                  <span className={utilStyles.ratingContainer}>
                    <span className={utilStyles.imdbRating}>{imdb.imdbRating}</span>
                    <span>/</span>
                    <span>10</span>
                  </span>
                  {/* <span className={utilStyles.imdbStar}><i className="fas fa-star"></i></span> */}
                  {' '}
                  <span className={utilStyles.subscript}>{imdb.imdbVotes} votes</span>
                </div>
              </div>
              <div className={utilStyles.showSpecifics}>
                {
                  imdb.Runtime && imdb.Runtime !== 'N/A' && (
                    <div className={utilStyles.runtime}>
                      <span className={utilStyles.icon}><i className="fas fa-clock"></i></span>
                      {imdb.Runtime}
                    </div>
                  )
                }
                {
                  imdb.Rated && imdb.Rated !== 'N/A' && (
                    <div className={utilStyles.runtime}>
                      <span className={utilStyles.icon}><i className="fas fa-tv"></i></span>
                      {imdb.Rated}
                    </div>
                  )
                }
                {
                  imdb.Country && imdb.Country !== 'N/A' && (
                    <div className={utilStyles.runtime}>
                      <span className={utilStyles.icon}><i className="fas fa-globe"></i></span>
                      {imdb.Country}
                    </div>
                  )
                }
                {
                  imdb.Year && imdb.Year !== 'N/A' && (
                    <div className={utilStyles.runtime}>
                      <span className={utilStyles.icon}><i className="far fa-calendar-alt"></i></span>
                      {imdb.Year}
                    </div>
                  )
                }
                {
                  imdb.totalSeasons && imdb.totalSeasons !== 'N/A' && (
                    <div className={utilStyles.runtime}>
                      <span className={utilStyles.icon}><i className="fab fa-canadian-maple-leaf"></i></span>
                      {imdb.totalSeasons}
                      {' '}
                      seasons
                    </div>
                  )
                }
              </div>
            </div>
          )
      }
    </div>
  )
}

export default function ContentDisplay ({ content, back }) {
  const fills = ['#1C92F5', '#FA4D56', '#FA4D56', '#F51CB3', '#1CF561']
  const fill = fills[Math.floor(Math.random() * fills.length)]
  return (
    <>
      <Head>
        <title>{content.name} - {siteTitle}</title>
      </Head>
      <div className={utilStyles.pageContainer}>
        <div className={utilStyles.pageHeaderContainer}>
          <div
            className={utilStyles.imageBanner}
            style={{ background: `url(${content.image}) center no-repeat` }}
          >
            <div className={utilStyles.overlay} />
            <div className={utilStyles.pageActivityName}>{content.name}</div>
            {handleInfo(content)}
          </div>
        </div>
        <div className={utilStyles.pageBodyContainer}>
          <div className={utilStyles.backButton}>
            <BackButton />
          </div>
          {
            content.title
              ? (
                <div className={utilStyles.pageActivityTitle}>
                  <div className={utilStyles.titleBlob}>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path fill={fill} d="M45.9,-78.4C59.1,-71.9,69.3,-58.9,74.6,-44.7C79.8,-30.6,80.3,-15.3,79.7,-0.3C79.1,14.6,77.4,29.2,71.4,42C65.4,54.9,55,66.1,42.3,74.9C29.7,83.7,14.9,90.1,0.4,89.4C-14,88.6,-27.9,80.6,-41.8,72.5C-55.8,64.4,-69.6,56.3,-77.8,44.2C-86,32.1,-88.5,16.1,-88.3,0.1C-88.1,-15.8,-85.2,-31.7,-77,-43.8C-68.8,-55.9,-55.4,-64.3,-41.7,-70.5C-28,-76.8,-14,-81,1.2,-83C16.3,-85,32.7,-85,45.9,-78.4Z" transform="translate(100 100)" />
                    </svg>
                  </div>
                  {handleMarkdown(content.title)}
                </div>
              )
              : null
          }
          {
            content.iframe
              ? (
                <div className={utilStyles.iframeContainer}>
                  <iframe
                    className={utilStyles.iframe}
                    src={content.iframe}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    allowtransparency="true"
                  />
                </div>
              )
              : null
          }
          {
            content.TLDR
              ? (
                <div className={utilStyles.TLDR}>
                  <div className={utilStyles.TLDRHeader}>TL;DR:</div>
                  {handleMarkdown(content.TLDR)}
                </div>
              )
              : null
          }
          <div className={utilStyles.pageBodyNotes}>
            <div className={utilStyles.pageBodyText}>
              {handleBody(content.body, content.name)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ContentDisplay.propTypes = {
  content: PropTypes.object,
  back: PropTypes.string,
}
