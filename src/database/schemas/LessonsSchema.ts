import { Schema } from 'mongoose';

import { timestampOpts, Lesson } from '../../utils/schemaUtils';

export default new Schema<Lesson>({
  _id: String,
  deadline: Date,
  title: String,
  content: String,
  text: String,
  activityLink: String,
}, timestampOpts);
