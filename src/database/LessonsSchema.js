const dbLocal = require("db-local");
const { Schema } = new dbLocal({ path: "./src/database/json" });

const lesson = Schema("Lessons", {
  _id: {
    type: String,
  },
  class: {
    type: Number,
  },
  discipline: {
    type: String,
  },
  content: {
    type: String,
  },
  teacher: {
    type: Object,
  },
  lessonStatus: {
    type: Object,
  },
});

module.exports = lesson;