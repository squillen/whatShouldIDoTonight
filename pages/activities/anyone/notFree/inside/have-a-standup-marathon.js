import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    {/* TODO ADD MORE */}
    <p>When is standup not good? Well, lots of the time, actually (I&apos;m looking at you, Netflix), but damn if there aren&apos;t some hilarious people out there, like this fellow:</p>
    <div className={styles.iframeContainer}>
      <iframe title="Clip of James Acaster Live at the Apollo" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/89E_zW1qIM8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      Now check out these notable comedians and get ready for a funny night. I mean,
      the night itself won&apos;t be funny, cause it&apos;s, you know, a time of day, but there will be lots of funny things said during the night.
      Yea, whatever, there&apos;s a reason my name isn&apos;t on this list:
    </p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/3ipZh8i"
          label="Dave Chappelle: Killin&apos; Them Softly (free on HBO)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2ZCahbl"
          label="Mike Birbiglia: My Girlfriend&apos;s Boyfriend (on Prime)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2E4LTrq"
          label="Bill Burr: Let It Go (on Netflix)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/33vn8gH"
          label="George Carlin: Jammin&apos; in New York (on Prime)"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.netflix.com/title/80213803"
          label="James Acaster: Repertoire (Netflix exclusive)"
        />
      </li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'dave chappelle/mike birbiglia/bill burr/george carlin/james acaster/comedy/standup/movie marathon/netflix/hbo',
    pageDescription: 'Get ideas on which stand up specials to watch with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a standup marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
