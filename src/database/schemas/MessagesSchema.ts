import { Schema } from 'mongoose';

import { timestampOpts, Message } from '../../utils/schemaUtils';

export default new Schema<Message>({
  _id: String,
  author: Object,
  to: String,
  content: String,
/*
  attachments: Object
  reactions: Object,
  reference: String
 */
}, timestampOpts);
