import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>They&apos;ll love it. I mean, I guess. I don&apos;t know you. Or them either, actually.</p>
    <Photo
      src="https://media.giphy.com/media/THmjzgkvUlcTO9BVHY/giphy.gif"
      alt="The Situation looking baffled while on a duck phone"
    />
    <p>☝☝ the reaction of whoever you&apos;re calling, because they&apos;re mother ducking shocked and ecstatic that you&apos;re actually calling.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'call someone/catch up with an old friend/jersey shore',
    pageDescription: 'Call someone tonight and make their night. And yours! Catch up with an old friend.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Call your mom / dad / sibling / grandma / cousin / friend"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
