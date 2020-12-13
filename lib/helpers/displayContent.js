import Link from 'next/link'
import Scrollable from '../../components/Scrollable/Scrollable'
import CardIsland from '../../components/CardIsland/CardIsland'
import utilStyles from '../../styles/utils.module.css'

export default function displayContent ({ content = [], header, source, path, ref, homeRef }) {
  const href = `/${source}/${path || header.toLowerCase()}`
  return (
    content && Array.isArray(content) && content.length
      ? (
        <div className={utilStyles.breakoutSection} key={header}>
          <div className={utilStyles.displayContentHeaderContainer}>
            <div className={utilStyles.leftHeaderContainer}>
              <Link href={href} as={href}>
                <a>
                  <h3 className={utilStyles.displayContentHeader} ref={ref}>{header}</h3>
                  {/* <sub className={utilStyles.seeAll}>see all & filter</sub> */}
                </a>
              </Link>
            </div>
            <div className={utilStyles.rightHeaderContainer}>
              <div className={utilStyles.bounce}>
                <span className={utilStyles.fa} onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}>
                  <i className="fas fa-chevron-up"></i>
                </span>
              </div>
            </div>
          </div>
          <div className={utilStyles.desktop}>
            <CardIsland source={source} content={content} key={`scrollable-${header}`}/>

          </div>
          <div className={utilStyles.mobile}>
            <Scrollable source={source} content={content} key={`scrollable-${header}`} />
          </div>
        </div>
      )
      : null
  )
}
