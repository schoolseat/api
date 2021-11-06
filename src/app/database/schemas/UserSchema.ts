/* eslint-disable func-names */
import bcrypt from 'bcrypt'

import { Schema, Document } from '@/app/database/Schema'
import type { User } from '@/types/models'

const UserSchema = new Schema<User & Document>({
  profilePic: String,
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 0 },
  stars: { type: Number, default: 0 },
  bio: { type: String, default: ' ' },
  dev: { type: Boolean, default: false },
  name: { type: String, required: true },
  email: { type: String, required: true },
  nickname: { type: String, unique: true },
  bornDate: { type: String, required: true },
  password: { type: String, required: true },
  classes: { type: Array, required: false, default: [] },
})

UserSchema.pre('save', async function (next) {
  const user = this as User
  const hash = await bcrypt.hash(user.password, 10)
  if (user.password.substring(0, 7) !== '$2b$10$') user.password = hash
  next()
})

export { UserSchema }
