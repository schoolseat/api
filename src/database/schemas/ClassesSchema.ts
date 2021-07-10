import { Schema } from 'mongoose';

import { timestampOpts, Classe } from '../../utils/schemaUtils';

export default new Schema<Classe>({
  _id: String,
  class: String,
  discipline: String,
  icon: String,
  color: String,
  bio: String,
  teacher: Object,
  school: Object,
  lessons: Array,
  users: Array,
  content: Array,
}, timestampOpts);
