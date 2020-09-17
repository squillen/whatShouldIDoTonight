import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      What do you normally do at home? Watch too much TV? Eat terrible food? Masturbate endlessly?
    </p>
    <Photo
      src="https://media.giphy.com/media/26uffjHH20cayahK8/giphy.gif"
      alt="Rodney Dangerfield endlessly licking through TV"
    />
    <p>
      [*Cue Morpheus voice*] What if I told you that there was actually something honorable you could do in your house?
    </p>
    <p>Volunteer. Virtually!</p>
    <p>
      <span>
        <LinkTo
          href="https://www.ted.com/participate/translate"
          label="Translate some TED Talks"
        />
        {' '}
        (and maybe learn something new in the process) or
        {' '}
        <LinkTo
          href="https://www.bemyeyes.com/"
          label="be someone's eyes"
        />
        {' '}
        or
        {' '}
        <LinkTo
          href="https://www.amnesty.org/en/get-involved/"
          label="do some work for Amnesty International"
        />
        {' '}
        or
        {' '}
        <LinkTo
          href="https://www.crisistextline.org/become-a-volunteer/"
          label="work the crisis text line"
        />
        {'.'}
      </span>
    </p>
    <p>
      <span>
      Or, if you want even more ideas, check out
        {' '}
        <LinkTo
          href="https://www.operationwarm.org/blog/25-volunteer-jobs-to-do-from-home/) and [catchafire](https://www.catchafire.org/volunteer?name_filter=&type_filter=1&type_filter=2&page=1"
          label="operation warm"
        />
      </span>
      , you <span className={styles.italicAndBold}>former</span> house heathen you!
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'volunteer/virtually/TED/Ted Talks/Amnesty International/operation warm/catchafire/be good/do good/help',
    pageDescription: 'Do something good from your house and help others'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Do some good"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
