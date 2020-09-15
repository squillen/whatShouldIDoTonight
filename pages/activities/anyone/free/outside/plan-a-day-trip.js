import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/jgq115ur7cLn2/giphy.gif"
      alt="cool dog buckled into front seat"
    />
    <p>
      <span>
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk01WMsZ9pUwK5Pk5abMWWgEPEqHAzQ%3A1600123637688&source=hp&ei=9fJfX9LCJoG-tQXM4pjwCg&q=day+trips+near+me&oq=day+trips+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAEJIDMgUIABCSAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BQgAEJECOggIABCxAxCDAToFCAAQsQNQ6whYvSxg2i5oAHAAeACAAb0CiAGcFJIBBzcuNC41LjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwiSkZKI3enrAhUBX60KHUwxBq4Q4dUDCAk&uact=5"
          label="Get out of your city and explore a bit"
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
      title="Plan a day trip"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
