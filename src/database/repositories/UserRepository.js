const MongoRepository = require('../MongoRepository');
const model = require('../schemas/UserSchema');

module.exports = class UserRepository extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model('users', model));
  }

  parse(entity) {
    return {
      createdAt: Date.now(),
      ...(super.parse(entity) || {}),
    };
  }
};
