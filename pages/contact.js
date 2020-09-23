import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { sendContactMail } from '../components/networking/mail-api'
import Button from '../components/button/button'

export default function ContactForm () {
  const [message, setMessage] = useState('message')
  const [name, setName] = useState('anonymous')
  const [title, setTitle] = useState('title')
  const [senderEmail, setSenderEmail] = useState('')
  const [messageType, setMessageType] = useState('question')
  const [sendStatus, setSendStatus] = useState(null)
  const [error, setError] = useState(false)
  const submitContactForm = async (event) => {
    event.preventDefault()
    if (!message.length) return setError(true)
    const recipientMail = 'WhatShouldIDoTonight@outlook.com'

    const res = await sendContactMail({ senderEmail, recipientMail, name, title, message, messageType })
    if (res.status < 300) {
      console.info('success!!')
    } else {
      console.error('error')
    }
    setSendStatus(res.status)
  }

  return (
    <Layout>
      <div className={utilStyles.contactContainer}>
        <div className={utilStyles.formContainer}>
          {/* NAME */}
          <div className={utilStyles.inputContainer}>
            <label htmlFor="" className={utilStyles.formLabel}>Your name:</label>
            <input
              type="text"
              className={utilStyles.nameInput}
              onChange={(e) => setName(e.target.value)}
              placeholder='optional'
            />
          </div>
          {/* SENDER EMAIL */}
          <div className={utilStyles.inputContainer}>
            <label htmlFor="" className={utilStyles.formLabel}>Your email:</label>
            <input
              type="text"
              className={utilStyles.nameInput}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder='optional'
            />
          </div>
          {/* MESSAGE TYPE */}
          <div className={utilStyles.inputContainer}>
            <label htmlFor="" className={utilStyles.formLabel}>Topic:</label>
            <select
              className={utilStyles.nameInput}
              name="messageType"
              id="messageType"
              onChange={(e) => setMessageType(e.target.value)}
            >
              <option className={utilStyles.option} value="question">question</option>
              <option className={utilStyles.option} value="comment">comment</option>
              <option className={utilStyles.option} value="suggestion">suggestion</option>
            </select>
          </div>
          {/* TITLE */}
          <div className={utilStyles.inputContainer}>
            <label htmlFor="" className={utilStyles.formLabel}>Title:</label>
            <input
              type="text"
              className={utilStyles.nameInput}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='optional'
            />
          </div>
          {/* MESSAGE */}
          <div className={utilStyles.inputContainer}>
            <span>
              <label htmlFor="">Message:</label>
              {' '}
              <span><sup className={utilStyles.superScript}>*required</sup></span>
            </span>
            <textarea
              className={utilStyles.messageTextArea}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <Button
          label="submit"
          onClick={submitContactForm}
        />
      </div>
    </Layout>
  )
}
