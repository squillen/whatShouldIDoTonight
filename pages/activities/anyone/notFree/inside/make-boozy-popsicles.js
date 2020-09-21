import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Have you ever had a popsicle? Stupid fucking question, right? Of course you have, they&apos;re great!</p>
    <p>Do you know what makes them even better, though?</p>
    <Photo
      src="https://media.giphy.com/media/EjyhOb2HgtX5C/giphy.gif"
      alt="Old timey Anderson Cooper asking, 'Shots?' and Andy Samberg and Peewee Herman yelling back, 'Shots!'"
    />
    <p>You&apos;re damn right it&apos;s shots!</p>
    <p>
      <span>
        No matter the alcohol, you can make it into a boozy popsicle with the help of some
        {' '}
        <LinkTo
          href="https://amzn.to/2ZWrcWb"
          label="popsicle molds"
        />
        .
        {' '}
        Or, if you don&apos;t already have any and don&apos;t want to buy any either, check out
        {' '}
        <LinkTo
          href="https://www.thekitchn.com/5-ways-to-make-popsicles-without-a-mold-220407"
          label="this article"
        />
        {' '}
        for some popsicle mold alternatives.
      </span>
    </p>
    <p>Check these out to get you started:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.delish.com/cooking/recipe-ideas/recipes/a54435/gin-and-tonic-pops-recipe/"
          label="gin & tonic pops"
        />
      </li>
      <li>
        <LinkTo
          href="https://thebeachhousekitchen.com/2019/07/18/miami-vice-boozy-popsicles/"
          label="strawberry daiquiri and piña colada pops"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.delish.com/entertaining/recipes/a43490/strawberry-mojito-pops-recipe/"
          label="strawberry mojito pops"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.delish.com/cooking/recipe-ideas/recipes/a53214/prosecco-pops-recipe/"
          label="lemon berry prosecco pops"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.delish.com/cooking/recipe-ideas/a22550175/tequila-sunrise-pops-recipe/"
          label="tequila sunrise pops"
        />
      </li>
      <li>
        <LinkTo
          href="http://yestoyolks.com/2016/06/20/kahlua-coconut-cream-affogato-popsicles/"
          label="kahlua coconut cream affogato pops"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.delish.com/cooking/recipe-ideas/recipes/a35803/blueberry-cabernet-cheesecake-popsicles-recipe-rbk0813/"
          label="blueberry cabernet cheesecake"
        />
      </li>
    </ul>
    <Photo
      src="https://media.giphy.com/media/5qMCjrwNW0k2Q/giphy.gif"
      alt="Emma Stone going cross-eyed and saying 'Yum' when food is placed in front of her face"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'homemade popsicles/boozy popsicles/alcohol/booze',
    pageDescription: 'Make boozy popsicles with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make boozy popsicles"
      content={userContent}
      timeToComplete="6+ hours"
    />
  )
}

export default connect()(Content)
