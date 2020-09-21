import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/69vdOdGtm0GDsDoS3N/giphy.gif"
      alt="dog mirroring its owners movements"
    />
    <p>
      <span>
        First off, if you don&apos;t have a dog,
        {' '}
        <LinkTo
          href="/activities/anyone/notFree/outside/foster-a-pet"
          label="consider changing that"
        />
        .
      </span>
    </p>
    <p>If you do, go ahead and spend about 20 minutes training him/her.</p>
    <p>
      <span>
        <LinkTo
          href="https://www.thegreatcoursesplus.com/dog-training-101"
          label="Here&apos;s a great series"
        />
        {' '}
        about training your dog. Or check out
        {' '}
        <LinkTo
          href="https://www.thesprucepets.com/steps-to-train-your-dog-1118273"
          label="this article"
        />
        {' '}
        for some useful, free tips!
      </span>
    </p>
    <p>Happy training!</p>
    <Photo
      src="https://media.giphy.com/media/L3urg9t8mPE4IG7VF4/giphy.gif"
      alt="Person training Golden Retriever puppy"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'dog/training/treats/behavior/obedient',
    pageDescription: 'Train your dog tonight with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Train your dog"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
