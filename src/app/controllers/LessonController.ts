import { Request, Response } from 'express'

import { Lessons } from '@app/database/models'

export async function getAllLessons(
  _req: Request,
  res: Response,
): Promise<void> {
  const lessons = await Lessons.findAll()

  res.send(lessons)
}

export async function getLessonById(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params
  const lesson = await Lessons.findOne({ _id: id })

  res.send(lesson)
}

export async function createLesson(req: Request, res: Response): Promise<void> {
  const lesson = await Lessons.add(req.body)

  res.send(lesson)
}

export async function removeLesson(req: Request, res: Response): Promise<void> {
  const lesson = await Lessons.remove(req.params.id)

  res.send(lesson)
}
