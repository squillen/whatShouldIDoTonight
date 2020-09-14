import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>There are, of course, so many different types of comedy, so see which one(s) float your boat:</p>
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
      <li>
        <LinkTo
          href=""
          label="Best in Show"
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
          label="Little Miss Sunshine"
        />
      </li>
    </ol>

    <p>Classic:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="Big"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Raising Arizona"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Young Frankenstein"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Monty Python and the Holy Grail"
        />
      </li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a comedy movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
