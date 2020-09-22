import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Did you find it yet? Sweet. Next.</p>
    <p>Alright, fine, maybe it&apos;s not that easy. And that&apos;s why you&apos;re gonna spend at least an hour tonight thinking about things to do in life.</p>
    <Photo
      src="https://media.giphy.com/media/E2d2tsgz7iHo4/giphy.gif"
      alt="Joey from Friends staring longingly out fake window with rain"
    />
    <p>No, not like that ☝, not a &quot;I need to change the world&quot; kind of intensity, just a &quot;life can be pretty awesome and I want to take advantage of that&quot; kind of intensity.</p>
    <p>Consider stuff like:</p>
    <ul>
      <li>tutoring/mentoring</li>
      <li>
        <LinkTo
          href="/activities/anyone/free/inside/plan-a-trip"
          label="traveling"
        />
      </li>
      <li>creating sites/apps</li>
      <li>
        <LinkTo
          href="/activities/anyone/notFree/outside/plant-herbs"
          label="gardening"
        />
      </li>
      <li>hiking</li>
      <li>rock climbing</li>
      <li>
        <LinkTo
          href="/activities/alone/free/inside/write-a-short-story"
          label="writing"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/alone/free/inside/read-a-classic"
          label="reading"
        />
      </li>
      <li>wood working</li>
      <li>cooking/wine/beer/coffee/tea</li>
      <li>
        <LinkTo
          href="/activities/alone/notFree/inside/buy-some-stocks"
          label="investing"
        />
      </li>
      <li>working out</li>
    </ul>
    <p>Here&apos;s a video to get you started:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} src="https://www.youtube-nocookie.com/embed/6pgaJb2Wwhs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        Then check out
        {' '}
        <LinkTo
          href="https://medium.com/the-mission/how-to-find-your-true-passion-and-live-a-life-you-wont-regret-on-your-deathbed-c58ce450beaf"
          label="this Medium article"
        />
        {' '}
       for some more insight.
      </span>
    </p>
    <p>
      Have fun with it, though. Don&apos;t put too much pressure on yourself.
      Have a glass of wine or a cup of tea and just enjoy the process because you&apos;re alive and that&apos;s awesome!
    </p>
    <Photo
      src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif"
      alt="Will Ferrell in the movie Old School saying 'Awesome! Yes!' in a grocery store cereal aisle and then punching and kicking some of the boxes in excitement"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'find a passion/passion/hobbies/life/bored/do something',
    pageDescription: 'Life can be amazing. Enjoy it!'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Find a passion"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
