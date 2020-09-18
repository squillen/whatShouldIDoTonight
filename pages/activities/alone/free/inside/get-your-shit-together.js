import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/5hdijbS3MDVw0SHWmn/giphy.gif"
      alt="Star Trek Captain Kirk shaking Spock with the caption 'Get your shit together'"
    />
    <p>...and make a donation pile!</p>
    <p>Go through your closet and figure out which clothes you no longer want/need.</p>
    <p>
      <span>
        Once you&apos;ve got that done, sell them through
        {' '}
        <LinkTo
          href="https://thredup.com"
          label="thredup"
        />
      </span>
      {' '}
      or just go to your local donation site.
    </p>
    <p>
      Your goal tonight is to get rid of at least 4 things. No bickering.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'donate/clean up/organize/get rid of clothes/declutter/reuse/recycle/environmental',
    pageDescription: "Get rid of the stuff you don't need and give it to people who actually want it."
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get your shit together"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
