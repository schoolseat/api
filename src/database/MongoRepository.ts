
/* eslint-disable class-methods-use-this */
import transformProps from 'transform-props';

const castToString = (arg) => String(arg);

type ModelProps = {
    countDocuments():  Promise<Object>;
    create(Object): Promise<Object>;
    findOneAndDelete(Object):  Promise<Object>;
    findById(Object, projection:Object|String|Array<String>): Promise<Object>;
    find(Object, projection: Object|String|Array<String>, types: Object):  Promise<Array<Object>>;
    updateOne(Object,  entity:Object, options: Object): Promise<Object>;
}

export default class MongoRepository {
    mongoose: Object;
    model: ModelProps;

  constructor(mongoose, model) {
    if (!mongoose || !model) throw new Error('Mongoose model cannot be null.');
    this.mongoose = mongoose;

    this.model = typeof model === 'string' ? mongoose.model(model) : model;
  }

  get size() {
    return this.model.countDocuments();
  }

  getParse() {
    return {};
  }

  parse(entity?: Object | any) {
    return entity
      ? transformProps(
        entity.toObject({ versionKey: false }),
        castToString,
        '_id',
      )
      : null;
  }

  add(entity:Object) {
    return this.model.create(entity).then(this.parse);
  }

  get(id:String, projection:Object|String|Array<String>) {
    return this.model
      .findById(id, projection)
      .then(
        (e) => (e && this.parse(e)) || this.add({ _id: id, ...this.getParse() }),
      );
  }

  remove(id:String) {
    return this.model.findOneAndDelete({ _id: id }).then(this.parse);
  }

  findOne(id:String, projection?: any) {
    return this.model.findById(id, projection).then(this.parse);
  }

  findAll(projection?: any, types?: any) {
    return this.model.find({}, projection, types).then((e) => e.map(this.parse));
  }

  update(id: String, entity:Object, options: Object = { upsert: true }) {
    return this.model.updateOne({ _id: id }, entity, options);
  }
};