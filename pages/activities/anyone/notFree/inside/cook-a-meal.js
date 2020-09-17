import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    {/* TODO RECOMMEND DISHES/RECIPES */}
    <p>Go all out. Go to the store and try something new. Or go with a classic, whatever, it&apos;s your night!</p>
    <Photo
      src="https://media.giphy.com/media/UW7uOP9uqWJ7V9w4GR/giphy.gif"
      alt="people being served lobster dinner"
    />
    <p>Or, if you want a challenge, do it chopped-style and only use three or so ingredients.</p>
    <p>
      <span>
        Now use those skills your mama taught you...or not and just get some
        {' '}
        <LinkTo
          href="https://www.kqzyfj.com/click-100215369-14088107"
          label="Blue Apron"
        />
        {' '}
        (where you actually get $20 off the first three months now, so uhhhh, maybe just do that anyway?)
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cook/blue apron/practice/kitchen/recipes',
    pageDescription: 'Cook something tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Cook a meal"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
