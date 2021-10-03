import { Schema, Document } from '@/app/database/Schema'
import type { Notification } from '@/types/models'

export const NotificationSchema = new Schema<Notification & Document>({
  to: {
    type: String,
    ref: 'User',
    required: true,
  },
  content: String,
  data: {
    route: String,
    props: Object,
  },
})
