const express = require('express');
const marked = require('marked');
const fs = require('fs');

const router = express.Router();
const DataController = require('./datacontroller');

const DatabaseMethods = new DataController();

router
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
    const user = await DatabaseMethods.getUserById(id);
    res.send(user);
  })
  .delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    const user = await DatabaseMethods.removeUser(String(id));
    res.send(user);
  })
  .post('/users', async (req, res) => {
    const user = await DatabaseMethods.createUser(req.body);
    res.json(user);
  })
  .get('/classes', async (req, res) => {
    const classes = await DatabaseMethods.getAllClasses();
    res.send(classes);
  })
  .get('/classes/:id', async (req, res) => {
    const { id } = req.params;
    const classe = await DatabaseMethods.getClassesById(id);
    res.send(classe);
  })
  .delete('/classes/:id', async (req, res) => {
    const { id } = req.params;
    const classe = await DatabaseMethods.removeClasses(String(id));
    res.send(classe);
  })
  .post('/classes', async (req, res) => {
    const classe = await DatabaseMethods.createClasses(req.body);
    res.json(classe);
  })
  .get('/content', async (req, res) => {
    const content = await DatabaseMethods.getAllContent();
    res.send(content);
  })
  .get('/content/:id', async (req, res) => {
    const { id } = req.params;
    const content = await DatabaseMethods.getContentById(id);
    res.send(content);
  })
  .delete('/content/:id', async (req, res) => {
    const { id } = req.params;
    const content = await DatabaseMethods.removeContent(String(id));
    res.send(content);
  })
  .post('/content', async (req, res) => {
    const content = await DatabaseMethods.createContent(req.body);
    res.json(content);
  })
  .get('/lessons', async (req, res) => {
    const lessons = await DatabaseMethods.getAllLessons();
    res.send(lessons);
  })
  .get('/lessons/:id', async (req, res) => {
    const { id } = req.params;
    const lessons = await DatabaseMethods.getLessonsById(id);
    res.send(lessons);
  })
  .delete('/lessons/:id', async (req, res) => {
    const { id } = req.params;
    const lessons = await DatabaseMethods.removeLessons(String(id));
    res.send(lessons);
  })
  .post('/lessons', async (req, res) => {
    const lessons = await DatabaseMethods.createLessons(req.body);
    res.json(lessons);
  })
  .get('/messages', async (req, res) => {
    const messages = await DatabaseMethods.getAllMessages();
    res.send(messages);
  })
  .get('/messages/:id', async (req, res) => {
    const { id } = req.params;
    const messages = await DatabaseMethods.getMessagesById(id);
    res.send(messages);
  })
  .delete('/messages/:id', async (req, res) => {
    const { id } = req.params;
    const messages = await DatabaseMethods.removeMessages(String(id));
    res.send(messages);
  })
  .post('/messages', async (req, res) => {
    const messages = await DatabaseMethods.createMessages(req.body);
    res.json(messages);
  });

module.exports = router;
