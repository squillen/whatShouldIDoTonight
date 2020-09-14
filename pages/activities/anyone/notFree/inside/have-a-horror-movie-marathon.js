import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>This suggestion is essentially saying, &quot;What Should I Do Tonight? Not sleep.&quot;</p>
    <p>Good luck, and, uhhh, maybe don&apos;t look behind you right now...</p>
    <Photo
      src="https://media.giphy.com/media/jquDWJfPUMCiI/giphy.gif"
      alt="Jim Carrey in Liar Liar looking scared"
    />
    <p>Thriller:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="28 Days Later"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="The Shining"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="A Quiet Place"
        />
      </li>
    </ol>

    <p>Slasher:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="Halloween"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="A Nightmare on Elm Street"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Deep Red"
        />
      </li>
    </ol>

    <p>Creepy/Paranormal:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="Paranormal Activity"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="The Ring"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="The Haunting of Hill House"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="The Conjuring"
        />
      </li>
    </ol>

    <p>Light-hearted:</p>
    <ol>
      <li>
        <LinkTo
          href=""
          label="The Dead Don't Die"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Ready or Not"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Warm Bodies"
        />
      </li>
      <li>
        <LinkTo
          href=""
          label="Housebound"
        />
      </li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a horror movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
