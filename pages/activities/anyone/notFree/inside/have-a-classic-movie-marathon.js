import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>There are so many different types of comedy, so see which one(s) float your boat:</p>
    <p>Silly:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="Airplane"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Borat"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="This is Spinal Tap"
        />
      </li>
    </ol>

    <p>Dark:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="Harold and Maude"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="What We Do in the Shadows"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="This is Spinal Tap"
        />
      </li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a classic movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
