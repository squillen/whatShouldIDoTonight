import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Get some laughs in tonight:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="Dave Chappelle: Killin&apos; Them Softly"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Mike Birbiglia: My Girlfriend&apos;s Boyfriend"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Bill Burr: Let It Go"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="George Carlin: Jammin&apos; in New York"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="James Acaster: Repertoire"
        />
      </li>
    </ol>
    TODO CHANGE ME
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a standup marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
