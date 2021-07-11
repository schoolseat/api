import { Schema, model } from 'mongoose';
import MongoRepository from '../MongoRepository';
import { timestampOpts, Classe } from '../../utils/schemaUtils';

const ClassesSchema = new Schema<Classe>({
  _id: { type: String, required: true },
  class: { type: String, required: true },
  discipline: { type: String, required: true },
  icon: { type: String, required: false },
  color: { type: String, required: false },
  bio: { type: String, required: false },
  teacher: { type: String, required: true },
  school: { type: String, required: false },
  lessons: { type: String, required: false },
  users: { type: String, required: false },
  content: { type: String, required: false },
}, timestampOpts);

export default class Classes extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, model<Classe>('classes', ClassesSchema));
  }
}