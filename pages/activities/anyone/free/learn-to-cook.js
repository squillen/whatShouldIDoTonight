import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Life&apos;s too short for bad food. So make better food and make it faster.</p>
    <p>
      <span>
        Learn how to
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=aoqVGdmVlKk"
          label="cut"
        />
        {', '}
        <LinkTo
          href="https://www.youtube.com/watch?v=G-Fg7l7G1zw"
          label="the types of cuts"
        />
        {', '}
        and how to
        {' '}
        <LinkTo
          href="https://www.bonappetit.com/test-kitchen/cooking-tips/article/how-to-learn-to-cook)."
          label="taste"
        />
      </span>

      <p>
        <span>
          And
          {' '}
          <LinkTo
            href="https://www.cookinglight.com/cooking-101/culinary-school-lessons-every-home-cook-should-know"
            label="here"
          />
        </span>
        {' '}
        are some general cooking basics you should know.
      </p>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn how to cook"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
