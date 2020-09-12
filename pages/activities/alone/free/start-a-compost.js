import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>You don&apos;t need anything to start right now, just a small trash bag or trash can.</p>
    <p>
      <span>
        Go ahead and read
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
      <span>
        If you don&apos;t have any space/a backyard, try composting with
        {' '}
        <LinkTo
          href="https://amzn.to/2QzM40f"
          label="worms"
        />
      </span>
    </p>
    <p>
      <span>
        Check out
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
  return (
    <Post
      title="Start a compost"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
