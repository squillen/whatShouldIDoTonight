import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Alcohol makes everything better. Until it doesn&apos;t</p>
    <Photo
      src="https://media.giphy.com/media/j0BKyov6oX9j0AH9Tm/giphy.gif"
      alt="Man about to puke"
    />
    <p>
      <span>
        See if there are any
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk00CoXEmK6jG5ciqKDRIvHHh8vXizA%3A1600115576990&ei=eNNfX_n8O8XusQWXt57wAg&q=whislkey+bar+near+me&oq=whislkey+bar+near+me&gs_lcp=CgZwc3ktYWIQAzIECAAQDTIICAAQDRAFEB4yCAgAEA0QBRAeMggIABANEAUQHjIICAAQDRAFEB4yCAgAEA0QBRAeMggIABANEAUQHjIICAAQCBANEB4yCAgAEAgQDRAeMggIABAIEA0QHjoECAAQRzoGCAAQBxAeOggIABAIEAcQHlDxhQxYkowMYOKQDGgAcAd4AIABZYgB1wSSAQM3LjGYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwj5mMOEv-nrAhVFd6wKHZebBy4Q4dUDCA0&uact=5"
          label="places near you"
        />
        and go have a reasonably responsible amount of fun.
      </span>
    </p>
    <p>If not, go get your own whiskeys (whiski?) and make your own whiskey bar.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go to a whiskey bar"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
