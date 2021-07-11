import { Schema, model } from 'mongoose';

import MongoRepository from '../MongoRepository';
import { timestampOpts, Message } from '../../utils/schemaUtils';

const MessagesSchema = new Schema<Message>({
  _id: { type: String, required: true },
  author: { type: String, required: true },
  to: { type: String, required: true },
  content: { type: String, required: true },
/*
  attachments: Object
  reactions: Object,
  reference: String
 */
}, timestampOpts);

export default class Messages extends MongoRepository {
  constructor(mongoose) {
    super(mongoose,  model<Message>('messages', MessagesSchema));
  }
}