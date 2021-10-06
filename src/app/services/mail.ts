import { resolve } from 'path'

import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access'
import Handlebars from 'handlebars'
import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'
import hbs from 'nodemailer-express-handlebars'

interface IMailOptions extends SendMailOptions {
  to: string | string[]
  template?: string
  context?: object
}

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

    this.transporter.use(
      'compile',
      hbs({
        viewEngine: {
          extname: '.hbs',
          defaultLayout: undefined,
          handlebars: allowInsecurePrototypeAccess(Handlebars),
        },
        viewPath: resolve(__dirname, '..', 'views'),
        extName: '.hbs',
      }),
    )
  }

  sendMail(options: IMailOptions): any {
    return this.transporter.sendMail({
      from: 'SchoolSeat <schoolseat@gmail.com>',
      ...options,
    })
  }
}

export default new Mailer()
