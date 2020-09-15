import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/lOOnwtpPLQ8nD8t6qB/giphy.gif"
      alt="Bad back massage on Love Island"
    />
    <p>Consider</p>
    <ul>
      <li>giving each other some sensual massages</li>
      <li>
        <span>
          <LinkTo
            href="/activities/anyone/free/outside/go-on-a-photo-walk"
            label="going on a photo walk"
          />
        </span>
      </li>
      <li>going to the park and have a picnic</li>
    </ul>
    <p>
      <span>
        Check
        {' '}
        <LinkTo
          href="https://www.theknot.com/content/date-ideas"
          label="this site"
        />
        {' '}
        out for some more inspiration.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a date night"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
