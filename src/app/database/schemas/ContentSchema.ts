import { Types } from 'mongoose'

import { Schema, Document } from '@/app/database/Schema'
import type { Content } from '@/types/models'

export const ContentSchema = new Schema<Content & Document>({
  _id: Types.ObjectId,
  title: { type: String, required: true },
  content: { type: String, required: true },
  text: { type: String, required: true },
  classe: { type: String, required: true },
})
