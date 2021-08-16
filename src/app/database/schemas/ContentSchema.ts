import { Schema, Document } from '@/app/database/Schema'
import type { Content } from '@/types/models'

export const ContentSchema = new Schema<Content & Document>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  text: { type: String, required: true },
  classe: {
    type: String,
    ref: 'Classe',
    required: true,
  },
  avaliation: { type: Object, required: false },
})
