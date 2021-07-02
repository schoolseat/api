const express = require('express');
const marked = require('marked');
const fs = require('fs');

const router = express.Router();
const DataController = require('./datacontroller')

const DatabaseMethods = new DataController();

router
/*
  .post('/tarefas', (req, res) => {
    res.json(lesson.create(req.body).save());
  })
  .delete('/tarefas/:id', (req, res) => {
    const { id } = req.params;
    res.json(lesson.del(id));
  })
  */
  .get('/', (req, res) => {
    const path = `${__dirname}/routes.md`;
    const file = fs.readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
  })
  .get('/users', async (req, res) => {
    const users = await DatabaseMethods.getAllUsers();
    res.send(users);
  })
  .get('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await DatabaseMethods.getUserById(String(id));
    res.send(user);
  })
  .get('/classes', async (req, res) => {
    const classes = await DatabaseMethods.getAllClasses();
    res.send(classes);
  })
  .get('/content', async (req, res) => {
    const content = await DatabaseMethods.getAllContent();
    res.send(content);
  })
  .get('/lessons', async (req, res) => {
    const lessons = await DatabaseMethods.getAllLessons();
    res.send(lessons);
  })
  .get('/messages', async (req, res) => {
    const messages = await DatabaseMethods.getAllMessages();
    res.send(messages);
  });

module.exports = router;
