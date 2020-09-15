import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Pick a movie and cook (or buy) something related to the film or to the area that it&apos;s filmed in.</p>
    <p>
      <span>
        So, for example, if you pick
        {' '}
        <LinkTo
          href="https://amzn.to/3hjAa5A"
          label="The Godfather"
        />
        , make some veal marsala (tuxedo optional, but not really).
      </span>
    </p>
    <p>
      <span>
        If you pick
        {' '}
        <LinkTo
          href="https://amzn.to/2RtHPE1"
          label="Oldboy"
        />
        , make some
        {' '}
        <LinkTo
          href="https://mykoreankitchen.com/bibimbap-korean-mixed-rice-with-meat-and-assorted-vegetables/"
          label="bibimbap"
        />
        .
      </span>
    </p>
    <p>
      <span>
        Or, say you really want sushi, maybe watch
        {' '}
        <LinkTo
          href="https://amzn.to/3iBJBiy"
          label="Spirited Away"
        />
        {', '}
        <LinkTo
          href="https://amzn.to/32uIrQ2"
          label="Your Name."
        />
        {' or '}
        <LinkTo
          href="https://amzn.to/32wZrFp"
          label="Battle Royale"
        />
        {' '}
        (free on IMDbTV).
      </span>
    </p>
    <p>Bonus if you also add the drink of choice from the region you choose!</p>
    <Photo
      src="https://media.giphy.com/media/3o7buc5fNWltOnQABG/giphy.gif"
      alt="A man in The Godfather motioning to someone with caption 'Let me have some wine"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Dinner and a movie"
      content={userContent}
      timeToComplete="2+ hours"
    />
  )
}

export default connect()(Content)