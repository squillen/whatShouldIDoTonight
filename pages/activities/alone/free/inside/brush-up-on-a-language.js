import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      This time will be different, right? &#128521;
    </p>
    <Photo
      src="https://media.giphy.com/media/L0aWDywDu1ziw/giphy.gif"
      alt="Joey reading from a script saying 'Beh Bloo de blah blay'"
    />
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
        Or, if you&apos;re more serious about learning and don&apos;t mind spending some money,
        {' '}
        <LinkTo
          href="/activities/alone/notFree/inside/take-language-lessons"
          label="hop over here"
        />
        .
      </span>
    </p>
    <p>Practice for at least 30 minutes.</p>
    <p>
      <span>
        Now, learn the following phrases, if you haven&apos;t already, by looking them up (via
        {' '}
        <LinkTo
          href="https://translate.google.com"
          label="google translate"
        />
        ):
      </span>
    </p>
    <ol>
      <li>My name is [your name] and I am from [country that you&apos;re from]</li>
      <li>What is your name?</li>
      <li>I don&apos;t know much [language you&apos;re currently translating to]</li>
      <li>What is your favorite restaurant around here?</li>
      <li>Where is the bathroom?</li>
    </ol>
    <p>Buena suerte, mon amie.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/language/babbel/duolingo/memrise/rocket language',
    pageDescription: 'Learn a new language with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Brush up on a language"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
