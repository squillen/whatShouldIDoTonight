import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Do you know how easy it is to grow your own herbs?
      And it basically costs the same to buy a plant as it does to buy
      store-bought herbs.
    </p>
    <p>It&apos;s honestly kind of a no-brainer.</p>
    <Photo
      src="https://media.giphy.com/media/tMPSeKEplOfK0/giphy.gif"
      alt="Jim Carrey with a look of 'ohh, of course!'"
    />
    <p>
      Head over to your local nursery / Lowe&apos;s / Home Depot,
      grab some pots and some soil (if you don&apos;t already have any),
      and then pick out some herbs.
    </p>
    <p>
      Basil, parsley, and cilantro are some obvious good
      choices but, depending on where you go, they might also have some more exotic
      options you can choose from, like tumeric or skullcap.
      {' '}
      <span>
        But if not, you can always
        {' '}
        <LinkTo
          href="https://thegrowers-exchange.com/collections/exotic-herb-plants"
          label="get some online"
        />
        .
      </span>
    </p>
    <p>
      <span>
        If you&apos;re in an apartment / without good light / just tight on space,
        {' '}
        consider getting an
        {' '}
        <LinkTo
          href="https://amzn.to/3krfhYn"
          label="AeroGarden"
        />
        . Those things are great, though, so you honestly might want to consider getting one either way.
      </span>
    </p>
    <p>And with that, welcome to your new life of better tasting food. You&apos;re basically a farmer now, too. Woohoo!</p>
    <Photo
      src="https://media.giphy.com/media/cI5mG5SemFlUz2GevG/giphy.gif"
      alt="American Gothic painting where the man subtly rolls his eyes"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'herbs/plant/planter/aerogarden',
    pageDescription: 'Plant some herbs with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Plant some herbs"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
