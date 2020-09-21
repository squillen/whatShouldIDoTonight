import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/j2MiuvFOw6Fby3L2LO/giphy.gif"
      alt="Phoebe running like a weirdo in Friends"
    />
    <p>
      I know, you came to this site looking for fun and we told you to go for a run.
      It&apos;s just a one letter difference but what a difference indeed.
    </p>
    <p>
      So, yes, you could rightfully tell us to go fuck ourselves and quickly move on
      to the next suggestion but there&apos;s a good chance this suggestion
      might leave you with more happiness than any other suggestion here.
    </p>
    <p>
      In the shocking case that you&apos;re still actually reading this, check your form against this before you head out:
    </p>
    <iframe className={styles.iframe} src="https://www.youtube-nocookie.com/embed/_kGESn8ArrU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      <span>
        Now get out there! And consider getting all techy about it with the help of apps like
        {' '}
        <LinkTo
          href="https://www.asurion.com/connect/tech-tips/top-10-running-apps-for-ios-and-android/"
          label="these"
        />
        {' and '}
        <LinkTo
          href="https://www.runnersworld.com/gear/a20865699/best-running-apps/"
          label="these"
        />
        .
      </span>
    </p>
    <p>
      <span>
        <span className={styles.greenCheck}><i className="fas fa-check"></i></span>
        {' '}
        Get through a whole running article without referencing Forest Gump.
      </span>
    </p>
    <p>No wait, fuck!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'run/outside/exercise',
    pageDescription: 'Go for a run'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go for a run"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
