import { Types } from 'mongoose'

import { Schema, Document } from '@/app/database/Schema'
import type { Classe } from '@/types/models'

export const ClasseSchema = new Schema<Classe & Document>({
  _id: Types.ObjectId,
  icon: String,
  color: String,
  bio: String,
  school: String,
  number: Number,
  teacher: { type: String, required: true },
  discipline: { type: String, required: true },
  users: {
    type: [
      {
        type: Types.ObjectId,
        ref: 'User',
      },
    ],
    required: true,
  },
  lessons: {
    type: [
      {
        type: Types.ObjectId,
        ref: 'Lesson',
      },
    ],
    required: true,
  },
  contents: {
    type: [
      {
        type: Types.ObjectId,
        ref: 'Content',
      },
    ],
    required: true,
  },
})
