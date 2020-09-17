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
    <p>Bring that romance back into your life, but maybe a little better than that ☝☝😅</p>
    <p>Consider going:</p>
    <ul>
      <li>to a nice(r) restaurant</li>
      <li>to play putt putt</li>
      <li>
        <span>
          <LinkTo
            href="/activities/anyone/notFree/outside/go-to-the-movies"
            label="to the movies"
          />
        </span>
      </li>
      <li>
        <span>
          <LinkTo
            href="/activities/anyone/free/outside/go-on-a-photo-walk"
            label="on a photo walk"
          />
        </span>
      </li>
      <li>to the park and have a picnic</li>
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
  const pageInfo = {
    tags: 'date night/fun/park/picnic/putt putt/mini golf/theknot/theknot.com/photo walk',
    pageDescription: 'Figure out fun things to do with your partner with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a date night"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
