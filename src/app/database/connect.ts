import mongoose from 'mongoose'

import { CONNECTION_OPTIONS } from './constants'

export function connect(): Promise<typeof mongoose> {
  return mongoose.connect(process.env.MONGODB_URI, CONNECTION_OPTIONS)
}
