import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
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
        Once you&apos;ve got that, crack a beer and
        {' '}
        <LinkTo
          href="https://www.delish.com/entertaining/g1634/unusual-grilling-recipes/"
          label="grillax"
        />
        .
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/cl9YkCypcrkxMQqwoM/giphy.gif"
      alt="Man grilling and grooving"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Grillax"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
