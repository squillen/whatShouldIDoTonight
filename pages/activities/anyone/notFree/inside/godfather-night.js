import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/26h0pkvcgnFIpvU1a/giphy.gif"
      alt="The Godfather - 'I'm gonna make him an offer he can't refuse'"
    />
    <p>
      <span>
        That&apos;s gonna be like 9 hours so strap in and get some caffeine, preferably in the form of an
        {' '}
        <LinkTo
          href="https://www.tasteatlas.com/affogato/recipe"
          label="affogato"
        />
      </span>
      .
    </p>
    <p>Here&apos;s what you&apos;re gonna do:</p>
    <ol>
      <li>Have caffeine (affogato)</li>
      <li>
        <span>
          Order
          {' '}
          <LinkTo
            href="https://amzn.to/2ZEDBxP"
            label="The Godfather"
          />
        </span>
      </li>
      <li>
        <span>
          Eat something Italian, but nothing too heavy, like
          {' '}
          <LinkTo
            href="https://www.tasteofhome.com/recipes/authentic-pasta-carbonara/"
            label="pasta Carbonara"
          />
          {' '}
          or a simple spaghetti with
          {' '}
          <LinkTo
            href="https://www.tasteofhome.com/recipes/homemade-canned-spaghetti-sauce/"
            label="homemade sauce"
          />
        </span>
      </li>
      <li>
        <span>
          Order
          {' '}
          <LinkTo
            href="https://amzn.to/3mlQBlE"
            label="The Godfather II"
          />
        </span>
      </li>
      <li>
        <span>
          Have an affogato and some
          {' '}
          <LinkTo
            href="https://www.recipesfromitaly.com/tiramisu-original-italian-recipe/"
            label="tiramisu"
          />
          {' '}
          (or buy some)
        </span>
      </li>
      <li>Have a good stretch because you&apos;re in the final stretch</li>
      <li>
        <span>
          Order
          {' '}
          <LinkTo
            href="https://amzn.to/2ZEFvhX"
            label="The Godfather III"
          />
        </span>
      </li>
      <li>Go to sleep. But not with the fishes.</li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Godfather movie marathon"
      content={userContent}
      timeToComplete="9+ hours"
    />
  )
}

export default connect()(Content)
