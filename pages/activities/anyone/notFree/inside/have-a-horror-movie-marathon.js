import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>This suggestion is essentially saying, &quot;What Should I Do Tonight? Not sleep.&quot;</p>
    <p>Good luck, and, uhhh, maybe don&apos;t look behind you right now...</p>
    <Photo
      src="https://media.giphy.com/media/jquDWJfPUMCiI/giphy.gif"
      alt="Jim Carrey in Liar Liar looking scared"
    />
    <p className={styles.header}>Thriller:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/2FyjESb"
          label="28 Days Later"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/35BxXAA"
          label="The Shining"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3meSmRP"
          label="A Quiet Place (free on Prime and Hulu)"
        />
      </li>
    </ol>

    <p className={styles.header}>Slasher:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/3bVzimK"
          label="Halloween"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/33v1kBA"
          label="A Nightmare on Elm Street"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2RpezhF"
          label="Scream (free on Tubi)"
        />
      </li>
    </ol>

    <p className={styles.header}>Creepy/Paranormal:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/3bUoG7M"
          label="Paranormal Activity"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3huxwKz"
          label="The Ring"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2FvRkjN"
          label="The Haunting of Hill House (on Netflix)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3hrRS71"
          label="The Conjuring"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3mmBMPJ"
          label="The Orphanage"
        />
      </li>
    </ol>

    <p className={styles.header}>Light-hearted:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/33tEw5y"
          label="Shaun of the Dead (free on Cinemax)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3mjdM00"
          label="Ready or Not (free on HBO)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2ZBowgJ"
          label="Warm Bodies"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3hvX1v4"
          label="Housebound (free on Tubi)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3mjNomB"
          label="The Dead Don't Die"
        />
      </li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: `
      28 days later/the shining/a quiet place/halloween/a nightmare on elm street/scream/the ring 
      /paranormal activity/the haunting of hill house/the conjuring/the orphanage/shaun of the dead/ready or not/warm bodies/housebound/the dead don't die
      /horror/scary/movies/marathon/light-hearted horror/creepy/slasher/thriller
    `,
    pageDescription: 'Watch some seriously scary movies tonight with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a horror movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
