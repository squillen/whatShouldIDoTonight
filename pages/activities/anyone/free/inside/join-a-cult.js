import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Ok, here me out on this one, there are a lot of benefits. I think NXVIM might have some openings:</p>
    <iframe className={styles.iframe} src="https://www.youtube-nocookie.com/embed/31rSR0w0z30" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>Ok, yea, I&apos;m just kidding. Move on to the next one.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cult/join/NXVIM/joke/HBO/The Vow',
    pageDescription: 'Join a cult like NXIVM. But not really.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Join a cult"
      content={userContent}
      timeToComplete="eternity"
    />
  )
}

export default connect()(Content)
