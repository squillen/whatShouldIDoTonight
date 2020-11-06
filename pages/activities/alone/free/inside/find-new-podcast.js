import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/h8yhqgovaZ5z58j7hg/giphy.gif"
      alt="The Good Place - 'You know what I just discovered? Podcasts."
    />
    <p>
      True crime? Humor? Educational?
    </p>
    <p>There is an almost unlimited amount out there.</p>
    <p>
      Some popular choices are:
    </p>
    <ul>
      <li>
        <LinkTo
          href="https://www.joerogan.com/"
          label="Joe Rogan"
        />
      </li>
      <li>
        <LinkTo
          href="https://billburr.com/podcast/"
          label="Bill Burr"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.vox.com/today-explained"
          label="Today, Explained"
        />
      </li>
      <li>
        <LinkTo
          href="https://crimejunkiepodcast.com/"
          label="Crime Junkie"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.sundaypapers.net/episodes"
          label="Sunday Papers"
        />
      </li>
    </ul>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="/listen"
          label="our listen page"
        />
        {' '}
        for even more ideas.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'podcast/new/find/joe rogan/bill burr/listen',
    pageDescription: 'There are so many amazing podcasts out there. Find some new ones'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Find a new podcast"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
