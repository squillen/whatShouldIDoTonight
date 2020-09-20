import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/oZl0bzT5eOvYc/giphy.gif"
      alt="guys eating ice cream with massive spoon"
    />
    <p>This genius ☝☝ found the loop hole.</p>
    <p>It&apos;s surprisingly easy...and unsurprisingly unhealthy. I mean, it&apos;s almost literally just &quot;iced&quot; cream. But whatever, you can do the frozen yogurt (or water ice) options instead if you&apos;re concerned. </p>
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
        is a nice, affordable option. And you&apos;re also probably gonna need
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
        If you&apos;re not sold on whether you want one or not, check out
        {' '}
        <LinkTo
          href="https://www.countryliving.com/food-drinks/g952/easy-homemade-ice-cream-0610/"
          label="these recipes"
        />
        {' '}
        and reconsider. If you still said no, you either already have one or you are a demon.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'ice cream/homemade/ice cream maker/diy/do it yourself/fun/activities/project/water ice/frozen yogurt/cuisinart',
    pageDescription: 'Make some ice cream at your place with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make some ice cream"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
