import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/3o6gE8ckqfTuPL3i5a/giphy.gif"
      alt={'Eddie Murphy screaming "Why?"'}
    />
    <p>You might be thinking similarly about your lack of plans tonight.</p>
    <p>
      <span>
        But worry no more,
        {' '}
        <LinkTo
          href="https://amzn.to/3klrVrP"
          label=" Eddie&apos;s got you"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'eddie murphy/movie night/movie marathon/nutty professor/dolemite is my name/beverly hills cop',
    pageDescription: 'Have an Eddie Murphy movie marathon with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have an Eddie Murphy night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
