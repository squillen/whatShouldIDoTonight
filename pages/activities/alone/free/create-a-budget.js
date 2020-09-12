import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Ok, not really, I mean go for it, but I just didn't want you to blow past
        {' '}
        the real suggestion here, which is to
        {' '}
        <span className={styles.bold}>make a budget</span>
      </span>
    </p>
    <p>
      Wait wait!! Keep reading, it's...OK, it's not fun but it can seriously be kind of satisfying once you get into it.
    </p>
    <p>
      <span>
      There are a couple of free sites like
        {' '}
        <LinkTo
          href="https://www.mint.com/"
          label="mint"
        />
        {', '}
        <LinkTo
          href="https://www.nerdwallet.com/blog/finance/how-to-build-a-budget/) and [money under 30](https://www.moneyunder30.com/no-more-budgets"
          label="nerdwallet"
        />
        {' '}
        to help you out.
      </span>
    </p>
    <p>
      <span>
      You can even use a budget
        {' '}
        <LinkTo
          href="https://docs.google.com/spreadsheets/d/1xUMVBjuV-0n721CktT7kYp8m2HFI64ZSK_O-9kRaKKQ/edit?usp=sharing"
          label="I created"
        />
        {' '}
        a little while ago, if you want.
      </span>
    </p>
    <p>
      <span>
      There are also paid sites likes
        {' '}
        <LinkTo
          href="https://www.youneedabudget.com/"
          label="You Need A Budget"
        />
        {' '}
        that might be helpful, too.
      </span>
    </p>
    <p>
      <span>
      And now, for reading this whole post,
        {' '}
        <LinkTo
          href="https://i.ibb.co/mTFDB5G/photo-1582068955580-dcc6c0812b21-ixlib-rb-1-2.jpg"
          label="here's a picture of some puppies in a wagon"
        />
        {'.'}
        that might be helpful, too.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have an ice cream sundae"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
