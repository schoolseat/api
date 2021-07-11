import { Router } from 'express';
import marked from 'marked';
import { readFileSync } from 'fs';

const router = Router();

import { 
  getAllClasses,
  getClassesById,
  removeClasses,
  createClasses,
  getAllContent,
  getContentById,
  removeContent,
  createContent,
  getAllLessons,
  getLessonsById,
  removeLessons,
  createLessons,
  getAllMessages,
  getMessagesById,
  removeMessages,
  createMessages,
  getAllUsers,
  getUserById,
  removeUser,
  createUser,
} from './controllers';

export default router

  .get('/', (req, res) => {
    const path = `${__dirname}/routes.md`;
    const file = readFileSync(path, 'utf8');
    res.send(marked(file.toString()));
  })

  .get('/users', getAllUsers)
  .get('/users/:id', getUserById)
  .delete('/users/:id', removeUser)
  .post('/users', createUser)

  .get('/classes', getAllClasses)
  .get('/classes/:id', getClassesById)
  .delete('/classes/:id', removeClasses)
  .post('/classes', createClasses)

  .get('/content', getAllContent)
  .get('/content/:id', getContentById)
  .delete('/content/:id', removeContent)
  .post('/content', createContent)

  .get('/lessons', getAllLessons)
  .get('/lessons/:id', getLessonsById)
  .delete('/lessons/:id', removeLessons)
  .post('/lessons', createLessons)

  .get('/messages', getAllMessages)
  .get('/messages/:id', getMessagesById)
  .delete('/messages/:id', removeMessages)
  .post('/messages', createMessages);
