import { Router } from 'express';
import marked from 'marked';
import { readFileSync } from 'fs';

const router = Router();

import { ClasseController, ContentController, LessonController, MessageController, UserControler } from './controllers';

export default router

  .get('/', (req, res) => {
    const path = `${__dirname}/routes.md`;
    const file = readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
  })

  .get('/users', UserControler.getAllUsers)
  .get('/users/:id', UserControler.getUserById)
  .delete('/users/:id', UserControler.removeUser)
  .post('/users', UserControler.createUser)

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
