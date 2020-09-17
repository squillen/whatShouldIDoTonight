import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/VfyC5j7sR4cso/giphy.gif"
      alt="Milhouse throwing a frisbee to himself"
    />
    <p>
      <span>
      Alone but not by choice? Check out
        {' '}
        <LinkTo
          href="https://hinge.co/"
          label="hinge"
        />
        {' or '}
        <LinkTo
          href="https://www.dpbolvw.net/click-100215369-13615689"
          label="eharmony"
        />
        {' '}
        and start a conversation!
      </span>
    </p>
    <p>Don&apos;t forget to invite us to the wedding &#128521;</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'find someone/love/alone/lonely/eharmony/hinge',
    pageDescription: "Don't be alone any longer. Find someone to love now."
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Find someone to love"
      content={userContent}
      timeToComplete="40+ minutes"
    />
  )
}

export default connect()(Content)
