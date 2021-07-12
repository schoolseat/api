import { Schema, Document } from '@/app/database/Schema'
import type { Lesson } from '@/types/models'

export const LessonSchema = new Schema<Lesson & Document>({
  deadline: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  text: { type: String, required: true },
  activityLink: { type: String, required: true },
})
