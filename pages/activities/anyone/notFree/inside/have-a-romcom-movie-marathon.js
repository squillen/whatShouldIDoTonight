import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Rom-coms can get a bad name. Some are genuinely good, like:
    </p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="As Good As It Gets"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="When Harry Met Sally"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="10 Things I Hate About You"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Clueless"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="The Big Sick"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="The Princess Bride"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="There&apos;s Something About Mary"
        />
      </li>
    </ol>

  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a rom-com movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
