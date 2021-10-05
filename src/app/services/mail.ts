import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'

class Mailer {
  transporter: Transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS,
      },
    })
  }

  sendMail(options: SendMailOptions): any {
    return this.transporter.sendMail({
      from: 'Support SchoolSeat <schoolseat@gmail.com>',
      ...options,
    })
  }
}

export default new Mailer()
