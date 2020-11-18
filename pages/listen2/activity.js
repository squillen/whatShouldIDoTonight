// import React, { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import PropTypes from 'prop-types'

// // REDUX
// import { connect } from 'react-redux'

// // COMPONENTS
// import Layout from '../../components/layout/layout'
// import Loading from '../../components/loading/loading'
// import ArticleHead from '../../components/ArticleHead'
// import HelpfulCounter from '../../components/HelpfulCounter/HelpfulCounter'

// // HELPERS
// import utilStyles from '../../styles/utils.module.css'
// import { getActivityFromDB } from '../../lib/helpers/db/requests'
// import ContentDisplay from '../../components/ContentDisplay/ContentDisplay'

// function Content () {
//   const [activity, setActivity] = useState({})
//   const router = useRouter()
//   const { name } = router.query
//   const getActivity = async () => {
//     try {
//       const newActivity = await getActivityFromDB('listen', name)
//       setActivity(newActivity)
//     } catch (e) {
//       console.error(e)
//     }
//   }

//   useEffect(() => {
//     if (!activity.name || activity.name !== name) getActivity()
//   }, [name])
//   return (
//     <Layout>
//       {
//         activity
//           ? (
//             <>
//               <ArticleHead activity={activity}/>
//               <div className={utilStyles.watchContentSection}>
//                 <ContentDisplay content={activity} />
//                 <div className={utilStyles.showInfoSectionContainer}>
//                   <div className={utilStyles.showInfoSectionHeader}>Show Info:</div>
//                   <div className={utilStyles.showInfoSectionBody}>
//                     {
//                       activity && activity.notes && activity.notes.listenSpeed
//                         ? (
//                           <div className={utilStyles.recommendedSpeed}>
//                             <div className={utilStyles.tableHeader}>Listen at:</div>
//                             <div className={utilStyles.showSpeed}>{activity.notes.listenSpeed}x</div>
//                           </div>
//                         )
//                         : null
//                     }
//                     {
//                       activity && activity.notes && activity.notes.notableEpisodes && activity.notes.notableEpisodes.length
//                         ? (
//                           <div className={utilStyles.whereToWatch}>
//                             <div className={utilStyles.tableHeader}>Notable Episodes:</div>
//                             {activity.notes.notableEpisodes.map((obj) => (
//                               <Link key={`${activity.name}-${obj.name}`} href={obj.url} as={obj.url}>
//                                 <a target="_blank">{obj.name}</a>
//                               </Link>
//                             ))}
//                           </div>
//                         )
//                         : null
//                     }
//                   </div>
//                 </div>
//                 <HelpfulCounter activity={activity} source="listen" />
//               </div>
//             </>
//           )
//           : <Loading loading={true}/>
//       }
//     </Layout>
//   )
// }

// Content.propTypes = {
//   activity: PropTypes.object,
// }

// export default connect((state) => state)(Content)