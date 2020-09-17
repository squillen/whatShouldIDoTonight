import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/ntdgNCETkoKvC/giphy.gif"
      alt="Where did the sheep go for vacation? To the Baaaaaahamas."
    />
    <p>
      Having some jokes in your pocket is always a good move. Learn:
    </p>
    <ul>
      <li>
        <span>
          <LinkTo
            href="http://www.laughfactory.com/jokes/clean-jokes"
            label="A clean one"
          />
        </span>
      </li>
      <li>
        <span>
          <LinkTo
            href="https://thoughtcatalog.com/melanie-berliet/2015/03/50-dirty-jokes-that-are-never-appropriate-but-always-funny/"
            label="A dirty one"
          />
        </span>
      </li>
      <li>
        <span>
          <LinkTo
            href="https://www.rd.com/list/short-jokes/"
            label="A couple of quick ones"
          />
          , like &quot;I invented a new word! Plagiarism!&quot; length.
        </span>
      </li>
    </ul>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/jokes/funny/dirty/clean/quick/one-liners/one liners',
    pageDescription: 'Learn some jokes with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn some jokes"
      content={userContent}
      timeToComplete="15+ minutes"
    />
  )
}

export default connect()(Content)
