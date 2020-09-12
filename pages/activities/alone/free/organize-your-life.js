import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
      Go through your fridge/pantry/closet/ nightstand/whatever and be ruthless (think:
        {' '}
        <LinkTo
          href="https://amzn.to/3iad7LU"
          label="Marie Kondo"
        />
        {'.'}
      </span>
    </p>
    <p>
      Get rid of useless stuff, de-clutter, and get some organization going on, maggot! Whoa, sorry, I got too excited.
    </p>
    <p>
      <span>
        Check out groups like
        {' '}
        <LinkTo
          href="https://www.instagram.com/gocleanco/"
          label="go clean co"
        />
        {' '}
        for ideas/inspiration.
      </span>
    </p>
    <p>
      <span>
      Next, if you have anything to sell, sell it! Sites like
        {' '}
        <LinkTo
          href="https://thredup.com"
          label="thredup"
        />
        {' '}
      are good for clothes, or just donate everything locally!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Organize your life"
      content={userContent}
      timeToComplete="10 minutes"
    />
  )
}

export default connect()(Content)
