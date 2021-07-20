/* eslint-disable func-names */
import bcrypt from 'bcrypt'

import { Schema, Document } from '@/app/database/Schema'
import type { User } from '@/types/models'

const UserSchema = new Schema<User & Document>({
  nickname: String,
  profilePic: String,
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  bornDate: { type: String, required: true },
  bio: { type: String, required: true },
  stars: { type: String, required: true },
  level: { type: String, required: true },
  xp: { type: String, required: true },
})

UserSchema.pre('save', async function (next) {
  const user = this as User
  const hash = await bcrypt.hash(user.password, 10)
  user.password = hash
  next()
})

export { UserSchema }
