import { Schema, model } from 'mongoose';

import MongoRepository from '../MongoRepository';
import { timestampOpts, Lesson } from '../../utils/schemaUtils';

const LessonsSchema = new Schema<Lesson>({
  _id: { type: String, required: true },
  deadline: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  text: { type: String, required: true },
  activityLink: { type: String, required: true },
}, timestampOpts);

export default class Lessons extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, model<Lesson>('lessons', LessonsSchema));
  }
}