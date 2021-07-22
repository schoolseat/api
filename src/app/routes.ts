import path from 'path'

import { Router } from 'express'

import {
  ClasseController,
  ContentController,
  LessonController,
  NotificationController,
  UserControler,
  AuthControler,
  verifyJWT,
} from './controllers'

export const routes = Router()

routes
  .get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, '/routes.html'))
  })
  .get('/users', UserControler.getAllUsers)
  .get('/users/:id', UserControler.getUserById)
  .delete('/users/:id', verifyJWT, UserControler.removeUser)
  .post('/users', UserControler.createUser)

  .get('/classes', verifyJWT, ClasseController.getAllClasses)
  .get('/classes/:id', verifyJWT, ClasseController.getClasseById)
  .delete('/classes/:id', verifyJWT, ClasseController.removeClasse)
  .post('/classes', verifyJWT, ClasseController.createClasse)

  .get('/content', verifyJWT, ContentController.getAllContent)
  .get('/content/:id', verifyJWT, ContentController.getContentById)
  .delete('/content/:id', verifyJWT, ContentController.removeContent)
  .post('/content', verifyJWT, ContentController.createContent)

  .get('/lessons', verifyJWT, LessonController.getAllLessons)
  .get('/lessons/:id', verifyJWT, LessonController.getLessonById)
  .delete('/lessons/:id', verifyJWT, LessonController.removeLesson)
  .post('/lessons', verifyJWT, LessonController.createLesson)

  .get('/notifications', verifyJWT, NotificationController.getAllNotifications)
  .get('/notifications/:id', verifyJWT, NotificationController.getNotificationById)
  .delete('/notifications/:id', verifyJWT, NotificationController.removeNotification)
  .post('/notifications', verifyJWT, NotificationController.createNotification)

  .post('/auth', AuthControler.loginUser)
