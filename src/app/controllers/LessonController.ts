import { Request, Response } from 'express'

import { Lessons } from '@app/database/models'

export async function getAllLessons(_req: Request,res: Response): Promise<void> {
  await Lessons.findAll()
    .then((lessons) => res.send(lessons))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function getLessonById(req: Request, res: Response): Promise<void> {
  await Lessons.findOne({ _id: req.params.id })
    .then((lesson) => res.send(lesson))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function createLesson(req: Request, res: Response): Promise<void> {
  await Lessons.add(req.body)
    .then((lesson) => res.status(201).send(lesson))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })  
}

export async function removeLesson(req: Request, res: Response): Promise<void> {
  await Lessons.remove(req.params.id)
    .then((lesson) => res.send(lesson))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}
