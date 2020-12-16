import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { sendContactMail } from '../components/networking/mail-api'
import Button from '../components/button/button'
import Modal from '../components/modal/modal'
import Photo from '../components/photo/photo'
import Loading from '../components/loading/loading'
import NextSEO from '../components/nextSEO'

const showSuccessModal = (onClick) => {
  return (
    <div className={utilStyles.modal}>
      <div className={utilStyles.modalTitle}>
        YAY!!!
        <Photo
          src="https://media.giphy.com/media/bbTIQvcZfSMFO/giphy.gif"
          alt="fedex driver kicking package onto customers roof"
        />
      </div>
      <div className={utilStyles.modalMessage}>
        <div>Your message was successfully delivered with great care and enthusiasm. Thank you for your thoughts.</div>
        <Button
          label="Close"
          onClick={onClick}
        />
      </div>
    </div>
  )
}

const showErrorModal = (onClick) => {
  return (
    <div className={utilStyles.modal}>
      <div className={utilStyles.modalTitle}>
        <Photo
          src="https://media.giphy.com/media/sS8YbjrTzu4KI/giphy.gif"
          alt="Michael Caine in The Dark Knight saying 'You trusted me. And I failed you."
        />
      </div>
      <div className={utilStyles.modalMessage}>
        <div>There was a problem and we weren&apos;t able to send your message 😢</div>
        <div>Please try again later.</div>
      </div>
      <Button
        label="Close"
        onClick={onClick}
      />
    </div>
  )
}

export default function ContactForm () {
  const [message, setMessage] = useState('message')
  const [name, setName] = useState('anonymous')
  const [title, setTitle] = useState('title')
  const [senderEmail, setSenderEmail] = useState('')
  const [messageType, setMessageType] = useState('question')
  const [formError, setFormError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalToOpen, setModalToOpen] = useState(null)
  const submitContactForm = async (event) => {
    event.preventDefault()
    if (!message.length) return setFormError(true)
    const recipientMail = 'WhatShouldIDoTonight@outlook.com'
    setLoading(true)
    const res = await sendContactMail({ senderEmail, recipientMail, name, title, message, messageType })
    if (res.status < 300) {
      console.info('success!')
      setName('')
      setTitle('')
      setSenderEmail('')
      setMessage('')
      setModalToOpen('showSuccessModal')
    } else {
      console.error('error')
      setModalToOpen('showErrorModal')
    }
    setLoading(false)
  }

  const modalFunction = {
    showSuccessModal,
    showErrorModal,
  }[modalToOpen] || function () {}

  const modalContent = modalFunction(() => setModalToOpen(false))
  const siteTitle = 'Contact Us - What Should I Do Tonight'
  const description = 'Contact Us What Should I Do Tonight'
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={description} />
      </Head>
      <NextSEO nofollow={true} noindex={false} title={siteTitle} description={description} url="https://whatshouldidotonight.com/contact" />
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
      <Modal
        modalContent={modalContent}
        onModalClose={() => setModalToOpen(null)}
      />
      <Loading loading={loading} message="sending, one sec..." />
    </Layout>
  )
}
