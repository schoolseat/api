import { Schema, Document } from '@/app/database/Schema'
import type { Classe } from '@/types/models'

export const ClasseSchema = new Schema<Classe & Document>({
  icon: String,
  color: String,
  bio: String,
  school: String,
  number: Number,
  teacher: { type: String, required: true },
  discipline: { type: String, required: true },
  users: {
    type: Array,
    ref: 'User',
    required: true,
  },
  lessons: {
    type: Array,
    ref: 'Lesson',
    required: true,
  },

  contents: {
    type: Array,
    ref: 'Content',
    required: true,
  },
})
