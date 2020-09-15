import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Take a look around and think about if there&apos;s anything you&apos;d like to redo! Maybe move some of the furniture around and change things up!
    </p>
    <Photo
      src="https://media.giphy.com/media/3oEduY9vzp0VSk0xQA/giphy.gif"
      alt="furniture being moved around room"
    />
    <p>
      Get some inspiration from sites like
      {' '}
      <LinkTo
        href="https://www.studio-mcgee.com"
        label="Studio McGee"
      />
      {' or '}
      <LinkTo
        href="https://stylebyemilyhenderson.com/"
        label="Emily Henderson"
      />
      .
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Refresh your decor"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
