import { Schema, Document } from '@/app/database/Schema'
import type { Classe } from '@/types/models'

export const ClasseSchema = new Schema<Classe & Document>({
  _id: String,
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
        type: String,
        ref: 'User',
      },
    ],
    required: true,
  },
  lessons: {
    type: [
      {
        type: String,
        ref: 'Lesson',
      },
    ],
    required: true,
  },
  contents: {
    type: [
      {
        type: String,
        ref: 'Content',
      },
    ],
    required: true,
  },
})
