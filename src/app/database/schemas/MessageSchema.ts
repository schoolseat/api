import { Types } from 'mongoose'

import { Schema, Document } from '@/app/database/Schema'
import type { Message } from '@/types/models'

export const MessageSchema = new Schema<Message & Document>({
  _id: String,
  to: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  /*
  attachments: Object
  reactions: Object,
  reference: String
 */
})
