import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/8gwgQZR82xB2o/giphy.gif"
      alt="cat mean mugging and dj'ing"
    />
    <p>
      Don&apos;t let this cat mean-mug you into submission. If s/he can make music so can you!
      In fact, that&apos;s the great thing about the age of computers--anyone can make music.
      Oh wait, maybe that&apos;s the bad thing about it?
    </p>
    <p>
      Well, either way, you, too, can make some (questionably good) digital music right now with some seriously powerful software, like:
    </p>
    <ul>
      <li>
        <LinkTo
          href="https://www.guitarcenter.com/Image-Line/FL-Studio-20-Producer-Edition-Software-Download.gc"
          label="FL Studio (Mid-Level)"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.guitarcenter.com/Avid/1-Year-Software-Updates-Support-RENEWAL-for-Pro-Tools-Perpetual-License-Download-1500000138076.gc?rNtt=pro%20tools&index=8"
          label="Pro Tools (Mid-Level)"
        />
      </li>
    </ul>
    <p>
      <span>
        <LinkTo
          href="https://bestbeatmakers.com/pro-tools-vs-fl-studio/"
          label="Check this out"
        />
        {' '}
        if you want some help figuring out which program is better suited for you.
      </span>
    </p>
    <p>
      <span>
        Or,
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/make-digital-music"
          label="hop over here"
        />
        {' '}
        if you&apos;d rather just get your feet wet for right now right now.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'digital music/learn/music software/edm/music/house music/fl studio/pro tools',
    pageDescription: 'Learn how to make digital music tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make digital music"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
