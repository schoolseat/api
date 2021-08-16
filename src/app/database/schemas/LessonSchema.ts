import { Schema, Document } from '@/app/database/Schema'
import type { Lesson } from '@/types/models'

export const LessonSchema = new Schema<Lesson & Document>({
  text: { type: String, required: true },
  title: { type: String, required: true },
  classe: {
    type: String,
    ref: 'Classe',
    required: true,
  },
  content: { type: String, required: true },
  deadline: { type: String, required: true },
  activityLink: { type: String, required: true },
  avaliation: { type: Object, required: false },
})
