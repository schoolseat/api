import 'dotenv/config'

import { networkInterfaces } from 'os'

import { blue, magenta } from 'chalk'
import cors from 'cors'
import express, { json } from 'express'
import helmet from 'helmet'

import { connect } from './app/database/connect'
import { routes } from './app/routes'
import { logger } from './logger'

// eslint-disable-next-line import/newline-after-import
;(async () => {
  await connect()

  const app = express()
  const network = networkInterfaces()

  const IP = network.wlp1s0
    ? network.wlp1s0[0].address
    : network[Object.keys(network)[1]]?.[0]?.address

  const PORT = process.env.PORT || 3333

  app.use(json())
  app.use(cors())
  app.use(helmet())

  app.use('/api', routes)

  app.listen(PORT, () =>
    logger.info(
      blue('App is running'),
      magenta(`http://localhost:${PORT}/api`),
      magenta(`http://${IP}:${PORT}/api`),
    ),
  )
})()
