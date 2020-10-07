import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Sometimes you need to be reminded to treat yourself. This is that reminder.</p>
    <Photo
      src="https://media.giphy.com/media/2hgAt92zs4qbp9Ld4W/giphy.gif"
      alt="dog at spa"
    />
    <p>
      If you&apos;ve got face masks, whitening strips, nasal pore strips, that kinda gross foot stone thing, and the like, go ahead and use any/all of those.
    </p>
    <p>
      <span>
        If not, check
        {' '}
        <LinkTo
          href="https://www.thepennyhoarder.com/save-money/diy-spa-day-for-cheap/"
          label="this"
        />
        {' '}
        baby out.
      </span>
    </p>
    <p>
      Now turn on a good movie, get a cup of tea (or a glass of wine/whatever) and get ready for a cheap, relaxing night &#128522;
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'pamper/relax/fun/indulge/spa/free/spa day',
    pageDescription: 'Pamper yourself on the cheap with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="A happy camper is a camper who pampers...fo' free!"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
