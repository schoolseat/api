const MongoRepository = require('../MongoRepository');
const model = require('../schemas/LessonsSchema');

module.exports = class UserRepository extends MongoRepository {
  constructor(mongoose) {
    super(mongoose, mongoose.model('lessons', model));
  }

  parse(entity) {
    return {
      timestamp: Date.now(),
      ...(super.parse(entity) || {}),
    };
  }
};
