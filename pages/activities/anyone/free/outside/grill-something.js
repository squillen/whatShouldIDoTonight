import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Have a grill? Use it. Don&apos;t have one? Maybe
        {' '}
        <LinkTo
          href="https://amzn.to/3bufo1S"
          label="you should"
        />
        ?
      </span>
    </p>
    <p>
      <span>
        Once you&apos;ve got that,
        {' '}
        <LinkTo
          href="https://www.delish.com/entertaining/g1634/unusual-grilling-recipes/"
          label="grill something"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Grill something"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
