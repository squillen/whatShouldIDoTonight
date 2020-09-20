import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    {/* TODO RECOMMEND DISHES/RECIPES */}
    <p>
      <span>
        Go all out. Go to the store and
        {' '}
        <LinkTo
          href="https://www.tasteofhome.com/collection/new-spring-recipes/"
          label="try something new"
        />
        , like
        {' '}
        <LinkTo
          href="https://www.tasteofhome.com/recipes/nikki-s-perfect-pastitsio/"
          label="Pastitsio"
        />
        {' or '}
        <LinkTo
          href="https://www.tasteofhome.com/recipes/lehmejun-armenian-pizza/"
          label="Lehmejun (Armenian Pizza)"
        />
        . Or go
        {' '}
        <LinkTo
          href="https://www.cookingchanneltv.com/recipes/packages/comfort-food-recipes/easy-comfort-food/photos/classic-recipes-from-home"
          label="with a classic"
        />
        , whatever, it&apos;s your night!

      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/UW7uOP9uqWJ7V9w4GR/giphy.gif"
      alt="people being served lobster dinner"
    />
    <p>
      <span>
        Or, if you want a challenge, do it
        {' '}
        <LinkTo
          href="https://frugalminimalistkitchen.com/chopped-home-challenge-ingredient-ideas/"
          label="Chopped-style"
        />
        {' '}
        and only use three or so ingredients.
      </span>
    </p>
    <p>
      <span>
        Now use those skills your mama taught you...or not and just get some
        {' '}
        <LinkTo
          href="https://www.kqzyfj.com/click-100215369-14088107"
          label="Blue Apron"
        />
        {' '}
        (where you actually get $20 off the first three months now, so uhhhh, maybe just do that either way?)
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cook/blue apron/practice/kitchen/recipes',
    pageDescription: 'Cook something tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Cook an extra nice meal"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
