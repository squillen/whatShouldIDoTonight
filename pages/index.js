import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Link from 'next/link'
import Activity from '../components/activity/activity'
import Layout from '../components/layout/layout'
import Button from '../components/button/button'
import { siteTitle } from '../components/defaultHead'
import utilStyles from '../styles/utils.module.css'
import { getAllActivitiesData } from '../lib/posts'

// HELPERS
import getRandomActivity from '../helpers/getRandomActivity'

export async function getStaticProps() {
  const activities = getAllActivitiesData()
  return {
    props: {
      activities
    }
  }
}

export default function Home({ activities }) {
  const [userAlone, setUserAlone] = useState(true)
  const [spendMoney, setSpendMoney] = useState(false)
  const [showThingToDo, setShowThingToDo] = useState(false)
  const [thingToDo, setThingToDo] = useState({})
  const [remainingActivities, setRemainingActivities] = useState(activities)

  // EFFECTS
  useEffect(() => {
    const { newThingToDo, events } = getRandomActivity({ activities, userAlone, spendMoney })
    setRemainingActivities(events)
    setThingToDo(newThingToDo)
  }, [userAlone, spendMoney])

  // CLICK HANDLERS
  const resetOptions = () => {
    setUserAlone(true)
    setSpendMoney(false)
    setShowThingToDo(false)
  }

  const handleSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    const boolean = value === 'false' ? false : true
    if (name === 'userAlone') setUserAlone(boolean)
    else setSpendMoney(boolean)
  }

  // HTML 
  const buttonLabel = Object.keys(thingToDo).length ? 'tell me another' : 'tell me'
  console.log('thingToDo', thingToDo)
  const buttons = (
    <div className={utilStyles.buttonContainer}>
      {
        Object.keys(thingToDo).length
          ? (
            <Button
              styleName={utilStyles.resetButton}
              onClick={resetOptions}
              label="reset"
            />
          )
          : null
      }
      <Button 
        label={<Link href={`/posts${thingToDo.category}/${thingToDo.id}`}><a>{buttonLabel}</a></Link>}
      />
    </div>
  )

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.questions}>
          <div className={utilStyles.question}>
            <span>
              I am
            </span>
            <span>
            <select className={utilStyles.select} name="userAlone" id="userAlone" onBlur={handleSelect}>
                <option className={utilStyles.option} name="userAlone" value="true">alone</option>
                <option className={utilStyles.option} name="userAlone" value="false">not alone</option>
              </select>
            </span>
          </div>
          <div className={utilStyles.question}>
            <span>
              I am
            </span>
            <span>
              <select className={utilStyles.select} name="spendMoney" id="spendMoney" onBlur={handleSelect}>
                <option className={utilStyles.option} name="spendMoney" value="false">not OK</option>
                <option className={utilStyles.option}  name="spendMoney" value="true">OK</option>
              </select>
            </span>
            <span> with spending money</span>
          </div>
          <div className={utilStyles.buttonContainer}>
            <Button 
              label={<Link href={`/posts${thingToDo.category}/${thingToDo.id}`}><a>tell me</a></Link>}
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}