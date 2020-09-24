import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/PqwqtOLfG19Ti/giphy.gif"
      alt="Guys head banging in Wayne's World"
    />
    <p>When was the last time you felt ☝ that ☝ passionately about some music?</p>
    <p>
      There&apos;s a good chance your music pool has gotten stagnant lately.
      Right now, find at least three new bands that you enjoy.
    </p>
    <p>
      Here are a couple of ways that you can go about it:
    </p>
    <ul>
      <li>Go down the Spotify or YouTube rabbit holes for 30 minutes and look at all the recommendations</li>
      <li>
          Get sophisticated about it and check out
        {' '}
        <LinkTo
          href="https://www.gnoosic.com/"
          label="gnoosic"
        />
        , which helps you find new music based on what you already like
      </li>
      <li>Call/text a friend and ask them for some of their favorites</li>
    </ul>
    <p>Now get out your floaty because your pool is ready for swimming again 😎</p>
    <Photo
      src="https://media.giphy.com/media/etn52ENYVnpxqMaXiT/giphy.gif"
      alt="Pug chilling in a pool in a floaty"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'new music/music/bands/spotify/find/new',
    pageDescription: 'Find new music and start to enjoy it again'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Find new music"
      content={userContent}
      timeToComplete="40+ minutes"
    />
  )
}

export default connect()(Content)
