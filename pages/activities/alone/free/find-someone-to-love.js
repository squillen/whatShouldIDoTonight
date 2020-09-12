import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
      Alone but not by choice? Check out
        {' '}
        <LinkTo
          href="https://hinge.co/"
          label="hinge"
        />
        {' '}
      and start a conversation.
      </span>
    </p>
    <p>Don&apos;t forget to invite us to the wedding &#128521;</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Find someone to love"
      content={userContent}
      timeToComplete="30 minutes"
    />
  )
}

export default connect()(Content)
