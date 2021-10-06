import type { Request, Response } from 'express'

import { Lessons } from '@app/database/models'

export function getAllLessons(_req: Request, res: Response) {
  Lessons.findAll()
    .then(lessons => res.send(lessons))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function getLessonById(req: Request, res: Response) {
  Lessons.findOne({ _id: req.params.id })
    .then(lesson => res.send(lesson))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function createLesson(req: Request, res: Response) {
  Lessons.add(req.body)
    .then(lesson => res.status(201).send(lesson))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function removeLesson(req: Request, res: Response) {
  Lessons.remove(req.params.id)
    .then(lesson => res.send(lesson))
    .catch(err => res.status(400).json({ error: err.message }))
}
