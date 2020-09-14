import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Have an idea that you&apos;ve been wanting to get online? Do it! </p>
    <p>
      <span>
        It can be quite easy with sites like
        {' '}
        <LinkTo
          href="https://wix.com"
          label="wix"
        />
        {', '}
        where you can create some gorgeous sites with basically no coding background. But before you do that, get your domain url from sites like
        {' '}
        <LinkTo
          href="https://www.anrdoezrs.net/click-100215369-13266669"
          label="namecheap"
        />
        {', '}
        my personal favorite, but sites like
        {' '}
        <LinkTo
          href="https://www.godaddy.com"
          label="godaddy"
        />
        {' '}
        are good, too
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Create a website"
      content={userContent}
      timeToComplete="1.5+ hour"
    />
  )
}

export default connect()(Content)
