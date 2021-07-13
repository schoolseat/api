import { Request, Response } from 'express'

import { Classes } from '@app/database/models'

export async function getAllClasses(_req: Request,res: Response): Promise<void> {
  await Classes.findAll()
    .then((classes) => res.send(classes))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function getClasseById(_req: Request,res: Response): Promise<void> {
  await Classes.findOne({ _id: req.params.id })
    .then((classe) => res.send(classe))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function createClasse(req: Request, res: Response): Promise<void> {
  await Classes.add(req.body)
    .then((classe) => res.status(201).send(classe))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function removeClasse(req: Request, res: Response): Promise<void> {
  await Classes.remove(req.params.id)
    .then((classe) => res.send(classe))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}
