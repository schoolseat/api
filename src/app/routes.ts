import path from 'path'

import { Router } from 'express'

import {
  ClasseController,
  ContentController,
  LessonController,
  MessageController,
  UserControler,
  AuthControler,
} from './controllers'

export const routes = Router()

routes
  .get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '/routes.html'))
  })
  .get('/users', UserControler.getAllUsers)
  .get('/users/:id', UserControler.getUserById)
  .delete('/users/:id', UserControler.removeUser)
  .post('/users', UserControler.createUser)

  .get('/classes', ClasseController.getAllClasses)
  .get('/classes/:id', ClasseController.getClasseById)
  .delete('/classes/:id', ClasseController.removeClasse)
  .post('/classes', ClasseController.createClasse)

  .get('/content', ContentController.getAllContent)
  .get('/content/:id', ContentController.getContentById)
  .delete('/content/:id', ContentController.removeContent)
  .post('/content', ContentController.createContent)

  .get('/lessons', LessonController.getAllLessons)
  .get('/lessons/:id', LessonController.getLessonById)
  .delete('/lessons/:id', LessonController.removeLesson)
  .post('/lessons', LessonController.createLesson)

  .get('/messages', MessageController.getAllMessages)
  .get('/messages/:id', MessageController.getMessageById)
  .delete('/messages/:id', MessageController.removeMessage)
  .post('/messages', MessageController.createMessage)

  .post('/auth', AuthControler.loginUser)
