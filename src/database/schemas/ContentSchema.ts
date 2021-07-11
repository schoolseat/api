import { Schema , model} from 'mongoose';
import MongoRepository from '../MongoRepository';
import { timestampOpts, Content } from '../../utils/schemaUtils';

const ContentSchema = new Schema<Content>({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  text: { type: String, required: true },
  classe: { type: String, required: true },
}, timestampOpts);

export default class Contents extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, model<Content>('content', ContentSchema));
  }
}