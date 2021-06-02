const lesson = require("../database/lesson");
const router = require("express").Router();

router
  .post("/tarefas", (req, res) => {
    res.json(lesson.create(req.body).save());
  })
  .delete("/tarefas/:id", (req, res) => {
    const { id } = req.params;
    res.json(lesson.del(id));
  });

module.exports = router;
