import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Yo, scrub, git gud and start gaining some XP by pwning some noobs.</p>
    <p>
      <span>
        If you don&apos;t get that, check out
        {' '}
        <LinkTo
          href="https://amzn.to/2FgRMlC"
          label="Amazon"
        />
        , where you can, of course, buy any freaking game out there. (Or just google &quot;popular gaming phrases&quot; like I did &#128517;)
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/xkvttzvWDPMEEXAJB1/giphy.gif"
      alt="Adam Driver as old man character on SNL with the caption, 'Okay, what do I do now?"
    />
    <p>
      <span>
      Or, if you don&apos;t want to commit to a game just yet, you can rent one (or many!) from
        {' '}
        <LinkTo
          href="https://www.tkqlhce.com/click-100215369-13890619"
          label="gamefly"
        />
        {' '}
      (with a free trial even!) and have them shipped to you lickety split.
      </span>
    </p>
    <p>
      <span>
      Or, if you&apos;re bored as all fuckshit right now, check out
        {' '}
        <LinkTo
          href="https://store.steampowered.com/"
          label="steam"
        />
        {' '}
      where you can start playing this very second.
      </span>
    </p>
    <p>
      <span>
        Orrrr if none of those do it for you and you&apos;re feeling a little more voyeuristic, watch people play on
        {' '}
        <LinkTo
          href="https://twitch.tv/"
          label="twitch"
        />
        , you kinky devil you.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/26gJyhYbxYREkYlNK/giphy.gif"
      alt="Cory from Boy Meets World creepily staring out window wit both hands pressed against the glass"
    />
    <p>
      <span>
        <div><span className={styles.italicAndBold}>**mom hat on**</span></div>
        <span className={styles.italic}>
          As someone who has spent many late nights building different civs and sports franchises, I just want to reiterate that you should be careful with this one and don&apos;t let these games take over your night...or life!
        </span>
        <div><span className={styles.italicAndBold}>**mom hat off**</span></div>
      </span>
    </p>
    <p>That was weird since I don&apos;t have any kids...and I&apos;m a man.</p>
    <p>Now go Leeroy Jenkins that shit.</p>
    <Photo
      src="https://media.giphy.com/media/JPry9tfvgTYic/giphy.gif"
      alt="Big ant (or something like that) jumping from twig onto a big ol' spider and getting immediately eaten with the caption 'Leeroy Jenkins' scrolling in"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'video games/fun/play/twitch/twitch.tv/steam/gamefly/amazon',
    pageDescription: 'Play fun video games tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Play some video games"
      content={userContent}
      timeToComplete="30 minutes"
    />
  )
}

export default connect()(Content)
