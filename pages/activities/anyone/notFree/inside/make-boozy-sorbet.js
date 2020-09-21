import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Have you ever had sorbet? It&apos;s great, right?</p>
    <p>Do you know how to make it even better?</p>
    <Photo
      src="https://media.giphy.com/media/EjyhOb2HgtX5C/giphy.gif"
      alt="Old timey Anderson Cooper asking, 'Shots?' and Andy Samberg and Peewee Herman yelling back, 'Shots!'"
    />
    <p>You&apos;re damn right it&apos;s shots!</p>
    <p>
      <span>
        No matter the alcohol, you can make it into a boozy sorbet with the help of an
        {' '}
        <LinkTo
          href="https://amzn.to/3kzVp5s"
          label="ice cream maker"
        />
        !
        {' '}
        I use the
        {' '}
        <LinkTo
          href="https://amzn.to/2HjJPNq"
          label="Cuisinart ICE-20"
        />
        {' '}
        because it&apos;s cheap and does everything you need.
      </span>
    </p>
    <p>Check these out to get you started:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.melangery.com/2013/07/merlot-sorbet.html"
          label="wine sorbet"
        />
      </li>
      <li>
        <LinkTo
          href="http://www.ericasweettooth.com/2010/04/blackberry-cabernet-sorbet.html"
          label="blackberry cabernet sorbet"
        />
      </li>
      <li>
        <LinkTo
          href="https://foodal.com/recipes/desserts/mango-tequila-sorbet/"
          label="mango tequila sorbet"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.thespruceeats.com/vodka-lemon-sorbet-761222"
          label="lemon vodka sorbet"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.dessertfortwo.com/sangria-sorbet/"
          label="sangria sorbet"
        />
      </li>
      <li>
        <LinkTo
          href="https://veganyackattack.com/2013/05/09/mango-lime-sorbet/"
          label="mango lime rum sorbet"
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
    tags: 'homemade sorbet/boozy sorbet/homemade ice cream/ice cream maker',
    pageDescription: 'Make boozy sorbets with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make boozy sorbet"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
