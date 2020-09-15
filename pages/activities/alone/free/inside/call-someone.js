import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>They&apos;ll love it. I mean, I guess. I (probably) don&apos;t know you. Or (probably) them either, actually.</p>
    <Photo
      src="https://media.giphy.com/media/THmjzgkvUlcTO9BVHY/giphy.gif"
      alt="The Situation on a duck phone"
    />
    <p>☝☝ the reaction of whoever you&apos;re calling, because they&apos;re shocked and ecstatic that you&apos;re actually calling.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Call your mom / dad / sibling / grandma / cousin / friend"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
