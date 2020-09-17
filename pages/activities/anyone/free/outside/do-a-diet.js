import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      You know those assholes who always say that they&apos;re on
      some gluten-free/keto/paleo/all-meat diet? Try being one of those assholes.
    </p>
    <Photo
      src="https://media.giphy.com/media/3ohzARhsw7JS7EEXvO/giphy.gif"
      alt="Ladies backing away from other lady who's gluten free...and allergic to the sun"
    />
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
          href="https://health.usnews.com/best-diet/best-healthy-eating-diets"
          label="Here&apos;s something"
        />
        {' '}
        to get you started. And
        {' '}
        <LinkTo
          href="https://parade.com/986848/nancy_henderson/types-of-diets/"
          label="another"
        />
        {' '}
        for good luck.
      </span>
    </p>
    <p>But with that, welcome to the team, you smarmy dickwad.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'start a diet/gluten-free/paleo/keto/us news/usnews/parade.com/',
    pageDescription: 'Consider trying a new diet with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Start a diet"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
