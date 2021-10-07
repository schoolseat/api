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

  .get('/classes', ClasseController.getAllClasses)
  .get('/classes/:id', ClasseController.getClasseById)
  .get('/teacher/:id', ClasseController.findTeacher)
  .delete('/classes/:id', verifyJWT, ClasseController.removeClasse)
  .post('/classes', verifyJWT, ClasseController.createClasse)

  .get('/content', ContentController.getAllContent)
  .get('/content/:id', ContentController.getContentById)
  .delete('/content/:id', verifyJWT, ContentController.removeContent)
  .post('/content', verifyJWT, ContentController.createContent)

  .get('/lessons', LessonController.getAllLessons)
  .get('/lessons/:id', LessonController.getLessonById)
  .delete('/lessons/:id', verifyJWT, LessonController.removeLesson)
  .post('/lessons', verifyJWT, LessonController.createLesson)

  .get('/notifications', NotificationController.getAllNotifications)
  .get('/notifications/:id', NotificationController.getNotificationById)
  .delete(
    '/notifications/:id',
    verifyJWT,
    NotificationController.removeNotification,
  )
  .post('/notifications', verifyJWT, NotificationController.createNotification)

  .post('/auth', AuthControler.loginUser)
  .get('/verify', AuthControler.verifyEmail)
