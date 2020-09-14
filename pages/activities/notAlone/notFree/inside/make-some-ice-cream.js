import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      It&apos;s surprisingly easy...and unsurprisingly  unhealthy. I mean, it&apos;s almost literally just "iced" cream. But whatever, you can do the frozen yogurt (or water ice) options instead if you&apos;re concerned.
    </p>
    <p>
      <span>
        <LinkTo
          href="https://amzn.to/3huslen"
          label="Get one"
        />
        {' '}
        from Amazon.
        {' '}
        <LinkTo
          href="https://amzn.to/2YvxKdw"
          label="This"
        />
        {' '}
        is a nice and affordable one.
      </span>
    </p>
    <p>
      <span>
        Each pick a recipe
        {' '}
        <LinkTo
          href="https://www.marthastewart.com/1105811/homemade-ice-cream-recipes"
          label="from Martha"
        />
        {' '}
        and get ready for your newfound love.

      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn yoga...with Adriene!"
      content={userContent}
      timeToComplete="10+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
