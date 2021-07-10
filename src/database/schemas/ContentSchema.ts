import { Schema } from 'mongoose';

import { timestampOpts, Content } from '../../utils/schemaUtils';

export default new Schema<Content>({
  _id: String,
  title: String,
  content: String,
  text: String,
  classe: Object,
}, timestampOpts);
