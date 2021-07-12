import type { ConnectOptions } from 'mongoose'

export const CONNECTION_NAME = 'SchoolSeat'

export const CONNECTION_OPTIONS: ConnectOptions = {
  appname: CONNECTION_NAME,
  poolSize: 10,
  keepAlive: true,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAliveInitialDelay: 15000,
  serverSelectionTimeoutMS: 15000,
}
