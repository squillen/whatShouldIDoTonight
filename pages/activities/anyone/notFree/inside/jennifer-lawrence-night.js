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
        be bad ass, start a company, and so, so much more.
      </span>
    </p>
    <p>
      <span>
        We recommend starting with
        {' '}
        <LinkTo
          href="https://amzn.to/3iIOnKf"
          label="Silver Linings Playbook"
        />
        , then
        {' '}
        <LinkTo
          href="https://amzn.to/33HH6Gf"
          label="Winter's Bone"
        />
        {' '}
        and then finally finishing the night off with
        {' '}
        <LinkTo
          href="https://amzn.to/3iKOJ2Z"
          label="American Hustle"
        />
        .
      </span>
    </p>
    <p>And do JLaw proud and get some pizza tonight, too, will ya??</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'jennifer lawrence/movie night/sparrow/joy/silver lining playbook/hunger games/jlaw/movie marathon',
    pageDescription: 'Watch Jennifer Lawrence movies with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a Jennifer Lawrence night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
