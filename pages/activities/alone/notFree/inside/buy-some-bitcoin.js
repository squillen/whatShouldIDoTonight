import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Have some money to spare? The billion dollar boom is <span className={styles.strikeThrough}>probably</span>
        {' '}
        definitely over but it might still prove valuable to have some coin.
      </span>
    </p>
    <p>
      <span>
        First,
        {' '}
        <LinkTo
          href="https://coindiligent.com/should-i-buy-bitcoin"
          label="check if"
        />
        {' '}
        bitcoin is right for you.
      </span>
    </p>
    <p>
      <span>
        If it is, you can trade at sites like
        {' '}
        <LinkTo
          href="https://www.etoro.com/en-us/"
          label="etoro"
        />
        {' and '}
        <LinkTo
          href="https://www.coinbase.com/"
          label="coinbase"
        />
        .
      </span>
    </p>
    <p>
      <span>
        If you want even more trading info, check out
        {' '}
        <LinkTo
          href="https://99bitcoins.com/buy-bitcoin/"
          label="this 99bitcoins article"
        />
        {'.'}
      </span>
    </p>
    <p>Invest responsibly, y&apos;all!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'bitcoin/money/make/earn/spend/invest/coinbase/etoro',
    pageDescription: 'Trade bitcoin and (hopefully) make some coin'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Buy some bitcoin"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
