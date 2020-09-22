import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>You don&apos;t need anything to start right now, just a small trash bag or trash can.</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="Composting for Beginners | The Dirt | Better Homes & Gardens" src="https://www.youtube-nocookie.com/embed/bGRunDez1j4?start=178" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        In addition to that ☝, check out
        {' '}
        <LinkTo
          href="https://learn.eartheasy.com/guides/composting/"
          label="this site"
        />
        {' '}
        for some good composting basics then go through your fridge for any old items you can add right now.
      </span>
    </p>
    <p>
      If you don&apos;t have any space or a backyard, try composting with worms:
    </p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="How to start a worm farm in 4 steps: vermiculture made easy" src="https://www.youtube-nocookie.com/embed/Berf8Sy0SCI?start=178" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        If that seems more up your ally, consider getting a
        {' '}
        <LinkTo
          href="https://amzn.to/2QzM40f"
          label="worm tower"
        />
        .
      </span>
    </p>
    <p>
      <span>
        And also check out
        {' '}
        <LinkTo
          href="https://www.backyardgardenlover.com/how-to-compost-with-worms/"
          label="this site"
        />
        {' '}
        for some more specific info on composting with worms.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'compost/green/environmental/improve/dirt/reduce waste/reduce',
    pageDescription: 'Get rid of old foods and reduce your environmental footprint'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Start a compost"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
