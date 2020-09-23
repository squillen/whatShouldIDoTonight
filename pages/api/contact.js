import nodemailer from 'nodemailer'

const emailPass = process.env.EMAIL_PASSWORD
const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  tls: {
    ciphers: 'SSLv3'
  },
  auth: {
    user: 'WhatShouldIDoTonight@outlook.com',
    pass: emailPass
  }
})

export default async (req, res) => {
  const { recipientMail, name, title, message, messageType, senderEmail } = req.body

  if (message === '') {
    res.status(403).send('')
    return
  }

  const mailerRes = await mailer({ title, name, text: message, recipientMail, messageType, senderEmail })
  res.send(mailerRes)
}

const mailer = ({ senderEmail, name, text, recipientMail, messageType }) => {
  const from = name && recipientMail ? `${name} <${recipientMail}>` : `${name || recipientMail}`
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `New ${messageType.toUpperCase()} from ${from}`,
    text,
    replyTo: senderEmail || recipientMail
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}
