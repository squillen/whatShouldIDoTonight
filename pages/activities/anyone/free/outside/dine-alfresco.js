import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/l7o2AhbmD7SqA/giphy.gif"
      alt="'Catch me outside' girl saying 'Catch me outside how bow dat?"
    />
    <p>This seems too simple, doesn&apos;t it? But sometimes we have to be reminded to do the simple things. This is that reminder.</p>
    <p>Take a break from the TV tonight and just enjoy the (hopefully) relaxing noises of nature. Even the hum of traffic can be fairly soothing.</p>
    <p>Really take your time eating and focus on what your food tastes like and (again, hopefully) how good it tastes.</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="/activities/anyone/notFree/inside/cook-a-meal"
          label="these recipes"
        />
      </span>
      {' '}
      to find something to eat.
    </p>
    <Photo
      src="https://media.giphy.com/media/zEIOLYJmQnpeM/giphy.gif"
      alt="Emma Stone going cross-eyed and saying 'Yum' when food is placed in front of her face"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'dine/alfresco/eat outside/recipes',
    pageDescription: 'Dine alfresco with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Dine alfresco"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
