import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Did you know there is probably a scavenger hunt going on around you right now??
      And that you&apos;re actually invited??
    </p>
    <p>
      <span>
        <LinkTo
          href="https://www.geocaching.com/play"
          label="Geocaching"
        />
        {' '}
        is one of the best kept secrets out there but it shouldn&apos;t be.
        {' '}
        It&apos;s a great way to get out, explore, and have some good old fashioned fun.
        {' '}
        And it really shows you the playful spirit of people, which makes you feel all warm and fuzzy.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/SHTW8kJ2VbMoU/giphy.gif"
      alt="dog covering face with paws"
    />
    <p>You play by finding things and hiding things! Try it out!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'geocache/hide/seek/scavenger hunt/explore/city',
    pageDescription: 'Go geocaching with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go Geocaching"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
