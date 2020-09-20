import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    {/* TODO GIVE IDEA OF WHAT THEY CAN DO */}
    <p>Boom, easy.</p>
    <p>Consider:</p>
    <ul>
      <li>
        <LinkTo
          href="https://moneywise.com/a/why-potlucks-are-the-perfect-alternative-to-expensive-dinners-with-friends"
          label="having a potluck"
        />
      </li>
      <li>listening to music and talking</li>
      <li>
        <LinkTo
          href="/activities/anyone/notFree/inside/have-a-comedy-movie-marathon"
          label="having a comedy movie marathon"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/anyone/notFree/inside/have-a-horror-movie-marathon"
          label="having a horror movie marathon"
        />
      </li>
      <li>going to an arcade</li>
      <li>
        <LinkTo
          href="/activities/notAlone/free/inside/play-board-games"
          label="playing some board games"
        />
      </li>
      <li>
        <LinkTo
          href="/activities/notAlone/notFree/outside/go-to-a-games-cafe"
          label="going to a board game cafe"
        />
      </li>
    </ul>
    <Photo
      src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
      alt="The Office dance party with Oscar, Darryl, and Kevin"
    />
    <p>
      <span>
        Don&apos;t have friends?
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/find-someone-to-hang-with"
          label="Find some"
        />
      </span>
      .
    </p>

  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'invite friends/fun/party/do stuff',
    pageDescription: 'Invite friends over or find some'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Invite some friends over"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
