
import utilStyles from '../../styles/utils.module.css'
export default function handleSeasons (seasonsArray = [], showName) {
  return (
    <div className={utilStyles.seasonsTable}>
      <div className={utilStyles.tableHeader}>Seasons To Watch:</div>
      {
        seasonsArray.map((status, idx) => {
          const seasonNumber = idx + 1
          return (
            <div className={utilStyles.seasonContainer} key={`${showName}-${idx}`}>
              <div className={utilStyles.seasonNumber}>{seasonNumber}</div>
              <div className={utilStyles.seasonWatchStatus}>{handleSeason[status]}</div>
            </div>
          )
        })
      }
      <div className={utilStyles.keysTable}>
        <div className={utilStyles.keyContainer}>{handleSeason.yes}: Worth the watch</div>
        <div className={utilStyles.keyContainer}>{handleSeason.maybe} : It&apos;s OK</div>
        <div className={utilStyles.keyContainer}>{handleSeason.no} : No. Just no.</div>
      </div>
    </div>
  )
}

export const handleSeason = {
  yes: <div className={utilStyles.watchThis}><i className="far fa-laugh-beam"></i></div>,
  no: <div className={utilStyles.dontWatchThis}><i className="far fa-frown"></i></div>,
  maybe: <div className={utilStyles.mehWatchThis}><i className="far fa-meh"></i></div>
}
