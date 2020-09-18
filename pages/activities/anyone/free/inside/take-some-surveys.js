import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        If you&apos;re in a chill mood and just want to watch
        {' '}
        <LinkTo
          href="/activities/anyone/notFree/inside/have-a-comedy-movie-marathon"
          label="something"
        />
        {' '}
        <LinkTo
          href="/activities/anyone/notFree/inside/have-a-horror-movie-marathon"
          label="on"
        />
        {' '}
        <LinkTo
          href="/activities/anyone/notFree/inside/have-a-romcom-movie-marathon"
          label="TV"
        />
        {' '}
        then you might as well get paid while you&apos;re doing it, right?
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/mrn71bpe35j6U/giphy.gif"
      alt="'Hide your kids' guy saying 'Well, obviously'"
    />
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.surveyjunkie.com/"
          label="Survey Junkie"
        />
        , where they pay you to take surveys.
      </span>
    </p>
    <p>
      Seriously, that&apos;s it. There&apos;s no catch. I mean, you&apos;re not
      gonna get rich off of it, but if you&apos;re not doing anything that requires
      much attention anyway, why not do it and get a couple bucks in the process??
    </p>
    <Photo
      src="https://media.giphy.com/media/Rl9Yqavfj2Ula/giphy.gif"
      alt="Easy button being clicked"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'surveys/bored/paid/take surveys/survey junkie',
    pageDescription: 'Take some surveys with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Take some surveys"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
