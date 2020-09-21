import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      It&apos;s surprisingly easy...and unsurprisingly  unhealthy. I mean, it&apos;s almost literally
      just &quot;iced&quot; cream. But whatever, you can always do the frozen yogurt (or sorbet/water ice)
      options instead.
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
        is a nice and affordable one. And you&apos;re also probably gonna need
        {' '}
        <LinkTo
          href="https://amzn.to/2E1NnCy"
          label="some containers"
        />
        {' '}
        to put it in after.
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
    <p>Ice cream for daysss.</p>
    <Photo
      src="https://media.giphy.com/media/26BkN3VJmiuWL9ZK0/giphy.gif"
      alt="man scooping endless ice cream"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'ice cream/homemade ice cream/martha stewart/ice cream maker/ice cream recipes',
    pageDescription: 'Learn how to make ice cream from home with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make some ice cream"
      content={userContent}
      timeToComplete="10+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
