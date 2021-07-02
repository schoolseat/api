const MongoDB = require('../database/MongoDB.js')

module.exports = class DatabaseLoader {
  constructor () {
    this.database = new MongoDB({
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  async start () {
    return await this.database
      .connect()
      .then(() => this.database)
  }
}