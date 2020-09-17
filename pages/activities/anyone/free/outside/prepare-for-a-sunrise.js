import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/JA8X1yjBnTaZW/giphy.gif"
      alt="sun rising over lake"
    />
    <p>
      <span>
        Find
        {' '}
        <LinkTo
          href="https://www.google.com/search?ei=UP9TX4STHqO7tgWv8aegDQ&q=where+to+watch+the+sunrise+near+me&oq=where+to+watch+sunrises+near+me&gs_lcp=CgZwc3ktYWIQARgCMgUIABDNAjIFCAAQzQIyBQgAEM0CMgUIABDNAjIFCAAQzQI6BAgAEEc6BggAEAcQHjoICAAQCBAHEB46BAgAEA06AggAOgYIABAIEB5Qt5gPWJmpD2Cw9w9oAXACeACAAWiIAdAEkgEDOC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab"
          label="some places"
        />
        {' '}
        near you to watch one. Consider hiking to the spot, too.
      </span>
    </p>
    <p>Once you&apos;ve found one, get ready. Bring some coffee/tea and something light to eat. It might be a little chilly, too, so also consider a jacket or something.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'sun rise/plan/nature/outside/fun',
    pageDescription: 'Plan for a sunrise with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Prepare for a sunrise"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
