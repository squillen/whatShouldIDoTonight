import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>If you don&apos;t know anything about buying stocks, check this out first:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="Stock Market For Beginners 2020 | How To Invest (Step by Step)" src="https://www.youtube-nocookie.com/embed/dFAiChOmoGI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        Nerdwallet.com is also a good place to consult, specifically
        {' '}
        <LinkTo
          href="https://www.nerdwallet.com/article/investing/how-to-buy-stocks"
          label="this article"
        />
        {' '}
        on how to buy stocks.
      </span>
    </p>
    <p>But, otherwise, if you already know a bit and have everything already set up, go do it!</p>
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
    <Photo
      src="https://media.giphy.com/media/l2Sq9qGTQnL5NyI6Y/giphy.gif"
      alt="Dog makin' that money"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'invest/stocks/buy/trade/money/the street/nerdwallet/nerd wallet',
    pageDescription: 'Learn about stocks and start investing today with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Buy some stocks"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
