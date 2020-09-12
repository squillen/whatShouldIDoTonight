import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Find
        {' '}
        <LinkTo
          href="https://www.google.com/search?ei=UP9TX4STHqO7tgWv8aegDQ&q=where+to+watch+the+sunrise+near+me&oq=where+to+watch+sunrises+near+me&gs_lcp=CgZwc3ktYWIQARgCMgUIABDNAjIFCAAQzQIyBQgAEM0CMgUIABDNAjIFCAAQzQI6BAgAEEc6BggAEAcQHjoICAAQCBAHEB46BAgAEA06AggAOgYIABAIEB5Qt5gPWJmpD2Cw9w9oAXACeACAAWiIAdAEkgEDOC4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab"
          label="some places"
        />
        {' '}
        near you to watch one. Consider hiking to the spot, too. Once you&apos;ve found one, get ready. Bring some coffee/tea and something light to eat. It might be a little chilly, too, so also consider a jacket or something.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Prepare for a sunrise"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
