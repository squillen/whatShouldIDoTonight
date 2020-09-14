import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        You&apos;re tax dollars are paying for those parks so you might as well use them!
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk01YovOL-6xycpfbAEjlnPtSpHxPeA%3A1600094420567&ei=1IBfX5P6IcqMsQWq4KG4Aw&q=parks+near+me&oq=parks+near+me&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBAgAEEMyBAgAEEMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAOgQIABBHOgYIABAHEB46CAgAELEDEJECOgUIABCRAlC67wZYlPIGYJ3zBmgAcAV4AIABbIgBogOSAQM0LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwiTtK2c8OjrAhVKRqwKHSpwCDcQ4dUDCA0&uact=5"
          label="Try Googling"
        />
        {' '}
        for some parks near you. Invite some friends or
        {' '}
        <LinkTo
          href="/activities/anyone/free/outside"
          label="bring your camera"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go to a park"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
