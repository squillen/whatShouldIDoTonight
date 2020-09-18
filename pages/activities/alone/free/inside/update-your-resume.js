import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/uf0EYGcobAity/giphy.gif"
      alt="Man saying he knows how to save, save as, print preview, etc. in Word"
    />
    <p>Whatever it is, put that shit on there.</p>
    <p>
      <span>
        Actually, wtf do I know? Check out
        {' '}
        <LinkTo
          href="https://www.indeed.com/career-advice/resumes-cover-letters/guide-to-updating-your-resume"
          label="these"
        />
        {' '}
        <LinkTo
          href="https://www.themuse.com/advice/how-to-update-your-resume-in-30-minutesand-turn-in-an-impressive-typofree-version"
          label="legit"
        />
        {' '}
        <LinkTo
          href="https://www.topresume.com/career-advice/modernize-your-outdated-resume"
          label="opinions"
        />
        {' '}
        instead.
      </span>
    </p>
    <p>
      <span>
        And then check out
        {' '}
        <LinkTo
          href="https://www.canva.com"
          label="Canva"
        />
        {' '}
        to help you make all that beautiful content actually beautiful.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/3q3QK6KyDVUBzih7hB/giphy.gif"
      alt="Nick Jonas doing the chef kiss to his fingers as in 'Delicious'"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'resume/update/linkedin/linked in/canva/the muse/themuse.com/top resume/topresume.com/resume',
    pageDescription: 'Update your resume with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Update your resume"
      content={userContent}
      timeToComplete="25+ minutes"
    />
  )
}

export default connect()(Content)
