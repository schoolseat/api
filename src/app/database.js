const MongoDB = require('../database/MongoDB');

module.exports = class DatabaseLoader {
  constructor() {
    this.database = new MongoDB({
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  start() {
    return this.database
      .connect()
      .then(() => this.database);
  }
};
