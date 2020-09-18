import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>You got some smarts you want to share? Do it.</p>
    <Photo
      src="https://media.giphy.com/media/3o7aD4ubUVr8EkgQF2/giphy.gif"
      alt="Billy Madison saying 'I am the smart man alive!'"
    />
    <LinkTo
      href="https://tutorme.com/"
      label="tutorme"
    />
    <LinkTo
      href="https://www.tutor.com/"
      label="tutor"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/read/educate/The Wall Street Journal/The Morning Brew/The Skimm/sound smart at parties',
    pageDescription: 'Educate yourself on a variety of topics and make yourself a better, more informed person with these tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Tutor someone"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
