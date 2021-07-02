const MongoRepository = require('../MongoRepository.js');
const model = require('../schemas/MessagesSchema');

module.exports = class UserRepository extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model('messages', model));
  }

  parse(entity) {
    return {
      timestamp: Date.now(),
      ...(super.parse(entity) || {}),
    };
  }
};
