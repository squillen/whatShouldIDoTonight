import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>You got some smarts you want to share? Do it.</p>
    <Photo
      src="https://media.giphy.com/media/3o7aD4ubUVr8EkgQF2/giphy.gif"
      alt="Billy Madison saying 'I am the smart man alive!'"
    />
    <p>Maybe you feel that way ☝☝ about one of these subjects:</p>
    <ul>
      <li>Algebra</li>
      <li>Calculus</li>
      <li>Writing/English</li>
      <li>Chemistry</li>
      <li>Computer Science</li>
      <li>Finance</li>
      <li>Accounting</li>
      <li>SAT/ACT</li>
      <li>and many more</li>
    </ul>
    <p>
      If so, there are lots of online opportunities for you to help others in need and
      make some money in the process, like:
    </p>
    <ul>
      <li>
        <span>
          <LinkTo
            href="https://tutorme.com/"
            label="tutorme.com"
          />
          {' '}
          (all subjects)
        </span>
      </li>
      <li>
        <span>
          <LinkTo
            href="https://www.tutor.com/"
            label="tutor.com"
          />
          {' '}
          (more for SAT/ACT prep)
        </span>
      </li>
    </ul>
    <p>Now get out there and school those kids!</p>
    <Photo
      src="https://media.giphy.com/media/5QTBj7It7Jt1MTvMM3/giphy.gif"
      alt="Schitt's Creek with caption 'time to get schooled'"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'tutor/SAT/ACT/learn/teach/tutor.com/tutorme.com',
    pageDescription: 'Learn how to tutor people with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Tutor someone!"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
