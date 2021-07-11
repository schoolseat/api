import { Schema, model } from 'mongoose';

import MongoRepository from '../MongoRepository';
import { timestampOpts, User } from '../../utils/schemaUtils';

const UserSchema = new Schema<User>({
  _id: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  nickname: { type: String, required: false },
  profilePic: { type: String, required: false },
  bornDate: { type: String, required: true },
  bio: { type: String, required: true },
  stars: { type: String, required: true },
  level: { type: String, required: true },
  xp: { type: String, required: true },
  classes: { type: Array, required: false },
}, timestampOpts);

export default class Users extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, model<User>('user', UserSchema));
  }
}