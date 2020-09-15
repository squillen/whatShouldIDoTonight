import Button from '../components/button/button'
import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'

export default function Custom404 () {
  return (
    <Layout>
      <div className={utilStyles.custom404}>
        <p>What you should do tonight is check your url.</p>
        <p>&apos;Cause that shit ain&apos;t right.</p>
        <Button
          label="start over"
          href="/"
        />
      </div>
    </Layout>
  )
}
