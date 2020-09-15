import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/IMlIBJfiJ0qZ2/giphy.gif"
      alt="Cool ass cat in sombrero with 'Tequila' caption"
    />
    <p>This cat knows what&apos;s up.</p>
    <p>
      <span>
        See if there are any
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk0327lwjvlQ37EtX0KxL6ue3-z76uA%3A1600115777377&ei=QdRfX4i-FsO4sgWOxpTYBg&q=tequila+bar+near+me&oq=tequila+bar+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEAcQHjIGCAAQBRAeMgYIABAFEB4yBggAEAgQHjoECCMQJzoFCAAQkgM6BggAEBYQHjoICAAQBxAKEB46CAgAEAgQBxAeOggIABAHEAUQHlCc_AJYgIYDYNGJA2gBcAB4AIABlQOIAccIkgEGMTAuNC0xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=psy-ab&ved=0ahUKEwjI4onkv-nrAhVDnKwKHQ4jBWsQ4dUDCA0&uact=5"
          label="places near you"
        />
        and go have a reasonably responsible amount of fun.
      </span>
    </p>
    <p>If not, go get your own tequila and make your own tequila bar.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go to a tequila bar"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
