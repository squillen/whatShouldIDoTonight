import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/SbwGrFfajN4OI/giphy.gif"
      alt="Two big poodles swinging in swings"
    />
    <p>Your tax dollars are paying for those parks so you might as well use them!</p>
    <p>
      <span>
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk01YovOL-6xycpfbAEjlnPtSpHxPeA%3A1600094420567&ei=1IBfX5P6IcqMsQWq4KG4Aw&q=parks+near+me&oq=parks+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBAgAEEMyBAgAEEMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgYIABAHEB46CAgAELEDEJECOgUIABCRAlC67wZYlPIGYJ3zBmgAcAV4AIABbIgBogOSAQM0LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwiTtK2c8OjrAhVKRqwKHSpwCDcQ4dUDCA0&uact=5"
          label="Try Googling"
        />
        {' '}
        for some parks near you. Invite some friends and
        {' '}
        <LinkTo
          href="/activities/anyone/free/outside/get-into-photography"
          label="bring your camera"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'park/fun/outside/nature/explore',
    pageDescription: 'Go outside and have fun at a park'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a park"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
