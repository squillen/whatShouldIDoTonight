
import utilStyles from '../../styles/utils.module.css'
export default function keyObjects (show) {
  const { seasonsToWatch, name, imdb = {} } = show
  const { totalSeasons } = imdb
  const seasonsToWatchDisplay = []
  function getSeasonsDisplay () {
    for (let i = 0; i < Number(totalSeasons); i++) {
      const seasonNumber = i + 1
      const reviewedSeason = seasonsToWatch[i]
      const seasonDisplay = (
        <div className={utilStyles.seasonContainer} key={`${name}-${i}`}>
          <div className={utilStyles.seasonNumber}>{seasonNumber}</div>
          <div className={utilStyles.seasonWatchStatus}>
            {
              reviewedSeason
                ? keyObject[reviewedSeason]
                : keyObject.unwatched
            }
          </div>
        </div>
      )
      seasonsToWatchDisplay.push(seasonDisplay)
    }
    return seasonsToWatchDisplay
  }
  return (
    <div className={utilStyles.seasonsTable}>
      <div className={utilStyles.tableHeader}>Seasons To Watch:</div>
      {
        Number(totalSeasons)
          ? getSeasonsDisplay()
          : (
            seasonsToWatch.map((key, idx) => {
              const seasonNumber = idx + 1
              return (
                <div className={utilStyles.seasonContainer} key={`${name}-${idx}`}>
                  <div className={utilStyles.seasonNumber}>{seasonNumber}</div>
                  <div className={utilStyles.seasonWatchStatus}>{keyObject[key]}</div>
                </div>
              )
            })
          )
      }
      <div className={utilStyles.keysTable}>
        <div className={utilStyles.keyContainer}>{keyObject.yes}: We approve</div>
        <div className={utilStyles.keyContainer}>{keyObject.maybe} : Quality slipped</div>
        <div className={utilStyles.keyContainer}>{keyObject.no} : Something&apos;s gone terribly wrong</div>
        <div className={utilStyles.keyContainer}>{keyObject.unwatched} : Shh! We haven&apos;t watched it yet!</div>
      </div>
    </div>
  )
}

export const keyObject = {
  yes: <div className={utilStyles.watchThis}><i className="far fa-laugh-beam"></i></div>,
  no: <div className={utilStyles.dontWatchThis}><i className="far fa-frown"></i></div>,
  maybe: <div className={utilStyles.mehWatchThis}><i className="far fa-meh"></i></div>,
  unwatched: <div className={utilStyles.mehWatchThis}><i className="fas fa-question"></i></div>,
}
