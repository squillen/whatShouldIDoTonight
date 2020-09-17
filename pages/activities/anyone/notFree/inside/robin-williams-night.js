import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/keTQt1Ry7yM9dlwDkp/giphy.gif"
      alt="Robin Williams as Mrs.Doubtfire running through restaurant screaming 'Help is on the way!'"
    />
    <p>You&apos;re damn right it is.</p>
    <p>
      <span>
      Check out his movies
        {' '}
        <LinkTo
          href="https://amzn.to/2GqOpsC"
          label="here"
        />
        {' '}
      and get ready to have your night saved.
      </span>
    </p>
    <p>Thanks, Mrs. D.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'robin williams/movie night/movie marathon/patch adams/hook/good will hunting/mrs. doubtfire',
    pageDescription: 'Have a Robin Williams movie night with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a Robin Williams night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
