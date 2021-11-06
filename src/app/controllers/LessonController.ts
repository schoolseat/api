import { Lessons, Classes } from '@app/database/models'
import { Request, Response } from 'express'

export async function getAllLessons(
  _req: Request,
  res: Response,
): Promise<void> {
  await Lessons.findAll()
    .then(lessons => res.send(lessons))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function getLessonById(
  req: Request,
  res: Response,
): Promise<void> {
  await Lessons.findOne({ _id: req.params.id })
    .then(lesson => res.send(lesson))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function createLesson(req: Request, res: Response): Promise<void> {
  const classe = await Classes.findOne({ _id: req.body.classe })
  await Lessons.add(req.body)
    .then(lesson => {
      classe.lessons.push(lesson._id)
      classe.save()
      res.status(201).send(lesson)
    })
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function removeLesson(req: Request, res: Response): Promise<void> {
  await Lessons.remove(req.params.id)
    .then(lesson => res.send(lesson))
    .catch(err => res.status(400).json({ error: err.message }))
}
