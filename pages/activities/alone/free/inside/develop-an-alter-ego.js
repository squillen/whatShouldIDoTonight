import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/Zno3oO7YQHwCA/giphy.gif"
      alt="Clark Kent turning into Superman"
    />
    <p>
      Clark Kent goes from a puny nobody to everyone&apos;s hero (without doing anything to his face, fucking stupid, but whatever).
      Why can&apos;t you do the same??
    </p>
    <p>
      <span>
      There&apos;s been
        {' '}
        <LinkTo
          href="https://www.bbc.com/worklife/article/20200817-the-batman-effect-how-having-an-alter-ego-empowers-you"
          label="even more evidence"
        />
      </span>
      {' '}
      that developing an alter ego can be beneficial to your life. &quot;Your life&quot; as in non-alter ego you.
    </p>
    <p>
      Whether you want to be more confident / determined / charismatic / etc. in the office / bedroom / gym / wherever, an alter ego could be a tool to help you achieve that.
    </p>
    <p>Like, personally, my alter ego is Liam Hottshite. The L is silent 😉</p>
    <p>
      <span>
        <LinkTo
          href="https://www.aboutsocialanxiety.com/creating-an-alter-ego/"
          label="Here"
        />
        {' '}
        is a good article to get you started.
      </span>
    </p>
    <p>
      I&apos;d wish you luck, but alter ego you doesn&apos;t need any damn luck.
    </p>

  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Develop an alter ego"
      content={userContent}
      timeToComplete="30 minutes"
    />
  )
}

export default connect()(Content)
