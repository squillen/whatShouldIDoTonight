import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Disclaimer, this is not for the easily embarrassed.</p>
    <p>
      <span>
        The idea is simple, and you might&apos;ve
        {' '}
        <LinkTo
          href="https://www.today.com/parents/outfits-cute-couple-s-goodwill-date-night-are-seriously-amazing-t114180"
          label="heard about it before"
        />
        .
      </span>
    </p>
    <p>
      Go to a thrift store, such as Goodwill, and pick out your
      partner&apos;s outfit for the night. Let&apos;s say that the entire outfit has
      to remain under $15, but you can obviously pick any amount you want.
      This is a great way to find out how much your partner actually likes you.
      Or how sadistic they are.
    </p>
    <Photo
      src="https://media.giphy.com/media/10Jpr9KSaXLchW/giphy.gif"
      alt="Jack Nicholson in The Departed shaking his head 'yes' in a disturbing way"
    />
    <p>
      Once the outfits are chosen the real night begins: go out to dinner.
      The nicer the restaurant, the more awkward/better the night.
    </p>
    <p>Own it.</p>
    <Photo
      src="https://media.giphy.com/media/hnl83xVQxpqJG/giphy.gif"
      alt="Macklemore in 'Thrift Shop' music video"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'goodwill/date night/date/funny/creative/nbc',
    pageDescription: 'Go on a creative date with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Goodwill date night"
      content={userContent}
      timeToComplete="1.5+ hours"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
