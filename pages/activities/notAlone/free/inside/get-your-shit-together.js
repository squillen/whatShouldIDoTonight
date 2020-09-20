import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>...and make donation piles.</p>
    <p>Go through your closet and figure out which clothes you no longer want/need.</p>
    <p>
      <span>
        Once you&apos;ve got them together, check out
        {' '}
        <LinkTo
          href="https://thredup.com"
          label="thredup"
        />
        {' '}
        are good for clothes or just go with the time-tested
        {' '}
        <LinkTo
          href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?mpre=https%3A%2F%2Fwww.ebay.com&campid=5338737256&toolid=10001&customid=whatShouldIDoTonight"
          label="eBay"
        />
        {' '}
        and sell anything and everything.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/qi8Yhj4pKcIec/giphy.gif"
      alt="Eastbound and Down character saying 'Dollar, dollar bills, y'all'"
    />
    <p>Either way, you have to get rid of those piles you just created.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'donate/clean/organize/declutter/de-clutter/thredup/recycle/clothes',
    pageDescription: 'Clean up your closet and donate with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get your shit together...together"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
