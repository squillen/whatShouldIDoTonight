import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
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
        is a nice, affordable option.
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
  return (
    <Post
      title="Make some ice cream"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
