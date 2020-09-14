import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO change me
    <p>
      You know those assholes who always say that they&apos;re on
      some gluten-free/keto/paleo/all-meat diet? Try being one of those assholes.
    </p>
    <p>
      Just start with a night and see how you like it. As one of those assholes,
      I&apos;d say that it&apos;s obviously going to take more than a night to feel anything,
      but it&apos;d be fun to try!
    </p>
    <p>
      <span>
        But, of course, make sure it makes sense for you and realize that all diets don&apos;t
        {' '}
        apply to all people.
        {' '}
        <LinkTo
          href="https://www.healthline.com/nutrition/9-weight-loss-diets-reviewed#section9"
          label="Here&apos;s something"
        />
        {' '}
        to get you started.
      </span>
    </p>
    <p>But with that, welcome to the team, you smarmy dickwad.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Do a diet"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
