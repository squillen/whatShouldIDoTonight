import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Being an adult comes with a lot of headaches. Taxes. Kids. Ailments. Deadlines. Kids.</p>
    <p>What, then, could possibly make life worth living??</p>
    <p>
      The answer, my bored and curious friends, is the ability to have
      got-dang breakfast for got-dang dinner whenever you got-dang want.
    </p>
    <p>And tonight is that got-dang night.</p>
    <Photo
      src="https://media.giphy.com/media/l4hLA63B2qCQmMMmc/giphy.gif"
      alt="cartoon eggs and bacon raising their hands in excitement"
    />
    <p>Go with classics like:</p>
    <ul>
      <li>
        <LinkTo
          href="https://thestayathomechef.com/pancake-recipe/"
          label="fluffy pancakes"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.simplyrecipes.com/recipes/french_toast/"
          label="french toast"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.thekitchn.com/how-to-make-the-easiest-cinnamon-rolls-235030"
          label="cinnamon rolls"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.delish.com/cooking/a20915685/how-to-make-scrambled-eggs/"
          label="scrambled eggs"
        />
      </li>
    </ul>
    <p>Or with variations of the classics:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.delish.com/cooking/recipe-ideas/a28607757/avocado-pancakes-recipe/"
          label="avocado pancakes"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.foodnetwork.ca/comfort-food/blog/smores-stuffed-french-toast-36301/"
          label="s'mores french toast"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.thekitchn.com/recipe-sweet-potato-cinnamon-buns-227782"
          label="sweet potato cinnamon rolls"
        />
      </li>
      <li>
        <LinkTo
          href="https://pinchofyum.com/parmesan-baked-eggs"
          label="parmesan baked eggs"
        />
      </li>
    </ul>
    <p>You could just go with cereal, but you deserve better than that.</p>
    <Photo
      src="https://media.giphy.com/media/L0NBKyiSt5NuUh2ITF/giphy.gif"
      alt="America's Got Talent judge saying 'You deserve everything and much, much more'"
    />
    <p>Now go enjoy you mornight!</p>

  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'breakfast for dinner/pancakes/waffles/eggs/adulting',
    pageDescription: 'Make some breakfast for dinner with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make B for D"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
