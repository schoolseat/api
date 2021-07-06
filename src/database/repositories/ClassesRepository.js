const MongoRepository = require('../MongoRepository');
const model = require('../schemas/ClassesSchema');

module.exports = class UserRepository extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model('classes', model));
  }

  parse(entity) {
    return {
      createdAt: Date.now(),
      ...(super.parse(entity) || {}),
    };
  }
};
