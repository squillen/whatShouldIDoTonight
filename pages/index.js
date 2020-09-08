import React, { useState } from "react";
import Head from 'next/head'
import Activity from '../components/activity'
import Layout from '../components/layout/layout'
import Button from '../components/button/button'
import { siteTitle } from '../components/defaultHead'
import utilStyles from '../styles/utils.module.css'
import { getAllActivitiesData } from '../lib/posts'

export async function getStaticProps() {
  const allActivitiesData = getAllActivitiesData()
  console.log('allActivitiesData', allActivitiesData)
  return {
    props: {
      allActivitiesData
    }
  }
}

export default function Home({ allActivitiesData }) {
  const [userAlone, setUserAlone] = useState(true)
  const [spendMoney, setSpendMoney] = useState(false)
  const [showThingToDo, setShowThingToDo] = useState(false)

  // click handlers
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
  console.log('allActivitiesData', allActivitiesData)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {
          showThingToDo
            ? (
              <Activity

              />
            )
            : (
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
              label="tell me"
              onClick={() => setShowThingToDo(true)}
            />
          </div>
        </div>
            )
        }
      
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allActivitiesData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}