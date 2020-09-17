import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/U4YBjXbucPwuny4rBM/giphy.gif"
      alt="Woman mindlessly hacking away on some sweet potatoes"
    />
    <p>Life&apos;s too short for bad food. So make better food and make it faster.</p>
    <p>Learn:</p>
    <ol>
      <li>
        <LinkTo
          href="https://www.youtube.com/watch?v=aoqVGdmVlKk"
          label="how to cut"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.youtube.com/watch?v=G-Fg7l7G1zw"
          label="the types of cuts"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.bonappetit.com/test-kitchen/cooking-tips/article/how-to-learn-to-cook)."
          label="how to taste"
        />
      </li>
    </ol>
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
        are just some good, general cooking basics you should know.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cook/learn/cookinglight/cooking light/bon appetit/cook better/knife skills',
    pageDescription: 'Learn how to cook better with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn how to cook"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
