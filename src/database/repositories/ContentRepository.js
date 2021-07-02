const MongoRepository = require('../MongoRepository.js');
const model = require('../schemas/ContentSchema');

module.exports = class UserRepository extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model('content', model));
  }

  parse(entity) {
    return {
      createdAt: Date.now(),
      ...(super.parse(entity) || {}),
    };
  }
};
