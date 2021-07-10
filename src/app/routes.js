const express = require('express');
const marked = require('marked');
const fs = require('fs');

const router = express.Router();

const {
  UserController,
  ClasseController,
  ContentController,
  LessonController,
  MessageController,
} = require('./controllers');

module.exports = router

  .get('/', (req, res) => {
    const path = `${__dirname}/routes.md`;
    const file = fs.readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
  })

  .get('/users', UserController.getAllUsers)
  .get('/users/:id', UserController.getUserById)
  .delete('/users/:id', UserController.removeUser)
  .post('/users', UserController.createUser)

  .get('/classes', ClasseController.getAllClasses)
  .get('/classes/:id', ClasseController.getClassesById)
  .delete('/classes/:id', ClasseController.removeClasses)
  .post('/classes', ClasseController.createClasses)

  .get('/content', ContentController.getAllContent)
  .get('/content/:id', ContentController.getContentById)
  .delete('/content/:id', ContentController.removeContent)
  .post('/content', ContentController.createContent)

  .get('/lessons', LessonController.getAllLessons)
  .get('/lessons/:id', LessonController.getLessonsById)
  .delete('/lessons/:id', LessonController.removeLessons)
  .post('/lessons', LessonController.createLessons)

  .get('/messages', MessageController.getAllMessages)
  .get('/messages/:id', MessageController.getMessagesById)
  .delete('/messages/:id', MessageController.removeMessages)
  .post('/messages', MessageController.createMessages);
