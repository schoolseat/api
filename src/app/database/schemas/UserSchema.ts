import { Schema, Document } from '@/app/database/Schema'
import type { User } from '@/types/models'

export const UserSchema = new Schema<User & Document>({
  _id: String,
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
