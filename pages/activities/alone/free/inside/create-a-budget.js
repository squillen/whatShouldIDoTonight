import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Ok, not really, I mean go for it, but I just didn&apos;t want you to blow past
        {' '}
        the real suggestion here, which is to
        {' '}
        <span className={styles.italicAndBold}>*make a budget*</span>
        .
      </span>
    </p>
    <p>
      Wait wait!! Keep reading, it&apos;s not that b...OK, it&apos;s not fun but it can seriously be kind of satisfying once you get into it.
    </p>
    <p>
      <span>
      There are several free sites like
        {' '}
        <LinkTo
          href="https://www.mint.com/"
          label="mint"
        />
        {' and '}
        <LinkTo
          href="https://www.nerdwallet.com/blog/finance/how-to-build-a-budget/"
          label="nerdwallet"
        />
        {' and '}
        <LinkTo
          href="https://www.moneyunder30.com/no-more-budgets"
          label="money under 30"
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
          label="we created"
        />
        , if you want.
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
      And now, for reading this whole post, here&apos;s a basket of puppies:
    </p>
    <Photo
      src="https://media.giphy.com/media/gcXcSRYZ9cGWY/giphy.gif"
      alt="basket of puppies being gently dumped into grass"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'budget/mint/mint finances/intuit/you need a budget/ynab/money/lifestyle/improve',
    pageDescription: "Creating a budget may seem boring but it can actually be quite fun and liberating to know exactly what you can and can't spend"
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have an ice cream sundae"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
