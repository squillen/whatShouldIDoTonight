import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/119LVmecQWrzlm/giphy.gif"
      alt="Mr.Clean getting down and dirty cleaning"
    />
    <p>☝ Mr. Clean making me feel all dirty 😳</p>
    <p>
      <span>
      Go through your fridge/pantry/closet/ nightstand/whatever and be ruthless (think:
        {' '}
        <LinkTo
          href="https://amzn.to/3iad7LU"
          label="Marie Kondo"
        />
        {').'}
      </span>
    </p>
    <p>
      Get rid of useless stuff, de-clutter, and get some organization going on!
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
  const pageInfo = {
    tags: 'organize/clean/declutter/de-clutter/go clean co/thredup',
    pageDescription: "Get rid of stuff you no longer need and make some money while you're at it."
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Organize your life"
      content={userContent}
      timeToComplete="10 minutes"
    />
  )
}

export default connect()(Content)
