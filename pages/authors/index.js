import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// COMPONENTS
import Layout from '../../components/layout/layout'

// HELPERS
import { getAuthorInfo } from '../../lib/helpers/db/requests'
import utilStyles from '../../styles/utils.module.css'

function ReadSection () {
  const router = useRouter()
  const { author } = router.query
  const [authorInfo, setAuthor] = useState(null)

  async function getAuthor () {
    try {
      let authorInDB = {}
      const authorName = (author && author.split('_').join(' ')) || ''
      authorInDB = await getAuthorInfo({ authorName })
      setAuthor(authorInDB)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (!authorInfo) getAuthor()
  }, [author])
  return (
    <Layout>
      <div>new author</div>
      {/* show their other articles */}
    </Layout>
  )
}

ReadSection.propTypes = {
}

export default ReadSection
