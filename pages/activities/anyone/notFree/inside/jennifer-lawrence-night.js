import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/jiv3km2dt7Fg4/giphy.gif"
      alt={'Jennifer Lawrence asking "Where\'s the pizza?"'}
    />
    <p>Smart, funny, pretty. What else you do want??</p>
    <p>
      <span>
        <LinkTo
          href="https://amzn.to/3kjBqHP"
          label="Watch her"
        />
        {' '}
        be bad ass, found a company, and so, so much more.
      </span>
    </p>
    <p>And do JLaw proud and get some pizza tonight, too, will ya??</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Jennifer Lawrence night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
