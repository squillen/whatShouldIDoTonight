import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Here&apos;s what you&apos;re gonna do:</p>
    <p>
      <ol>
        <li>
          <span>
            Check out the newest movies on
            {' '}
            <LinkTo
              href="https://amzn.to/3gv2yBs"
              label="Amazon"
            />
          </span>
        </li>
        <li>Rent one</li>
        <li>
          <span>
            Make some
            {' '}
            <LinkTo
              href="https://www.foodnetwork.com/recipes/articles/50-flavored-popcorn-recipes"
              label="gourmet popcorn"
            />
          </span>
        </li>
        <li>Enjoy</li>
      </ol>
    </p>

    {/* ![neon sign that says "ice cream solves everything"](https://i.ibb.co/r6JZDKw/ice-cream.jpg) */}
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Foster a pet"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
