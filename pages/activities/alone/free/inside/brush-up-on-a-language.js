import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      This time will be different, right? &#128521;
    </p>
    <p>
      <span>
        Classic free options are
        {' '}
        <LinkTo
          href="https://www.duolingo.com/"
          label="duolingo"
        />
        {' '}
         and
        {' '}
        <LinkTo
          href="https://www.memrise.com/"
          label="memrise"
        />
      </span>
      .
    </p>
    <p>
      <span>
        Practice for 30 minutes. Now, learn the following phrases, if you haven&apos;t already, by looking them up (via
        {' '}
        <LinkTo
          href="https://translate.google.com"
          label="google translate"
        />
        ):
      </span>
      <ol>
        <li>My name is [your name/alter ego] and I am from [country that you&apos;re from]</li>
        <li>What is your name?</li>
        <li>I don&apos;t know much [language you&apos;re currently translating to]</li>
        <li>What is your favorite restaurant around here?</li>
        <li>Where is the bathroom?</li>
      </ol>
    </p>
    <p>Buena suerte, mon amie.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Brush up on a language"
      content={userContent}
      timeToComplete="30 minutes"
    />
  )
}

export default connect()(Content)
