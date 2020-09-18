import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>With no guilt, here&apos;s what you&apos;re gonna do:</p>
    <ol>
      <li>
        <span>
          Find
          {' '}
          <LinkTo
            href="/activities/anyone/notFree/inside/have-a-comedy-movie-marathon"
            label="something"
          />
          {' '}
          <LinkTo
            href="/activities/anyone/notFree/inside/have-a-horror-movie-marathon"
            label="to"
          />
          {' '}
          <LinkTo
            href="/activities/anyone/notFree/inside/have-a-romcom-movie-marathon"
            label="watch"
          />
          {' '}
          <span className={styles.boldAndItalic}>BEFORE</span> you start because you
          {' '}
          ain&apos;t doing shit after all these calories.
        </span>
      </li>
      <li>
        <span>
          Scan through
          {' '}
          <LinkTo
            href="https://www.foodnetwork.com/shows/the-kitchen/decadent-recipes-from-the-kitchen"
            label="these recipes"
          />
          {' '}
          and if it doesn&apos;t contain butter in the ingredients
          {' '}
          you tell that recipe to kindly fuck off.
        </span>
      </li>
      <li>
        <span>
          Finish with a
          {' '}
          <LinkTo
            href="https://www.bonappetit.com/recipes/slideshow/decadent-dessert-recipes"
            label="bang"
          />
          {' '}
          (because you are definitely not banging anything else tonight).
        </span>
      </li>
    </ol>
    <p>Oink oink, mother porker.</p>
    <Photo
      src="https://media.giphy.com/media/11iM5dry7YBmJa/giphy.gif"
      alt="Bruce from Matilda sick from eating too much cake"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cook/decadent/recipes/caloric/fattening/ice cream/pie/cake/matilda',
    pageDescription: 'Cook something decadent tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Eat like a pig"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
