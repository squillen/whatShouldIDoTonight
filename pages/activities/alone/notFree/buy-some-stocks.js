import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        If you don&apos;t know anything about buying stocks, check out this
        {' '}
        <LinkTo
          href="https://www.nerdwallet.com/article/investing/how-to-buy-stocks"
          label="nerdwallet"
        />
        {' '}
        article.
      </span>
    </p>
    <p>If you already know a bit and have everything already set up, go do it!</p>
    <p>
      <span>
        Or, if you need a refresher, check out this article by
        {' '}
        <LinkTo
          href="https://www.thestreet.com/how-to/how-to-research-stocks-14948710"
          label="The Street"
        />
        {'.'}
      </span>
    </p>
    <p><span>Invest responsibly, y&apos;all, and <span className={styles.bold}>make that money!</span></span></p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Buy some stocks"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
