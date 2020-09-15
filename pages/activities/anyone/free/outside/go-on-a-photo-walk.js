import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        First,
        {' '}
        <LinkTo
          href="/activities/anyone/free/outside/get-into-photography"
          label="hop over here"
        />
        {' '}
        if you&apos;re new to photography.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/xhX1qFxqmDNHG/giphy.gif"
      alt="cycling through various sceneries through the camera's viewfinder"
    />
    <p>
      Now, get out your phone or camera (make sure they&apos;re charged!) and just go outside.
      Maybe you&apos;ve got a park near you, or a hiking trail, or a downtown, a junk yard, whatever, just go somewhere!
    </p>
    <p>
      <span>
        Try
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk001AnK0kfk6z1Nm0t3zxXdkQ61Xpw%3A1600092788249&ei=dHpfX6PlDo_KswW_97ygDA&q=photo+walks+near+me&oq=photo&gs_lcp=CgZwc3ktYWIQAxgAMgQIIxAnMgQIIxAnMgQIIxAnMgsIABCxAxCDARCRAjIFCAAQkQIyBAgAEEMyBwgAELEDEEMyBwgAELEDEEMyBQgAELEDMgQIABBDOgQIABBHOggIABCxAxCDAVC6vS5Y9sAuYL3OLmgAcAN4AIABW4gB6wKSAQE1mAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab"
          label="Googling some places near you"
        />
        {' '}
        or check out if
        {' '}
        <LinkTo
          href="https://worldwidephotowalk.com/locations/"
          label="this site"
        />
        {' '}
        has any previous walks (or future!) for you to follow.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go on a photo walk"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
