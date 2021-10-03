import { Request, Response } from 'express'

import { Classes } from '@app/database/models'

export async function getAllClasses(
  _req: Request,
  res: Response,
): Promise<void> {
  await Classes.findAll()
    .then(classes => res.send(classes))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function getClasseById(
  req: Request,
  res: Response,
): Promise<void> {
  await Classes.findOne({ _id: req.params.id })
    .then(classe => res.send(classe))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function createClasse(req: Request, res: Response): Promise<void> {
  await Classes.add(req.body)
    .then(classe => res.status(201).send(classe))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function removeClasse(req: Request, res: Response): Promise<void> {
  await Classes.remove(req.params.id)
    .then(classe => res.send(classe))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function findTeacher(req: Request, res: Response): Promise<void> {
  await Classes.findOne({ _id: req.params.id })
    .then(classe => {
      Users.findOne({ _id: classe.teacher }).then(user =>
        res.status(200).send(user),
      )
    })
    .catch(err => res.status(400).json({ error: err.message }))
}
