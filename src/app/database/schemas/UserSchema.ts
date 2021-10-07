/* eslint-disable func-names */
import { randomUUID as uuid } from 'crypto'

import bcrypt from 'bcrypt'

import { Schema, Document } from '@/app/database/Schema'
import type { User } from '@/types/models'

const UserSchema = new Schema<User & Document>({
  _id: { type: String, required: true, default: uuid },
  nickname: { type: String, unique: true },
  profilePic: String,
  password: { type: String, required: true, select: false },
  email: { type: String, required: true },
  name: { type: String, required: true },
  bornDate: { type: String, required: true },
  bio: { type: String, required: true },
  stars: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  dev: { type: Boolean, default: false },
  verified: { type: Boolean, default: false },
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

export { UserSchema }
