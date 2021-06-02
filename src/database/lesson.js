const Lesson = require("./LessonsSchema");

function create(lesson) {
  return Lesson.create(lesson);
}

function del(_id) {
  const rm = Lesson.find(_id);
  return rm.remove();
}
module.exports = {
  create,
  del,
};
