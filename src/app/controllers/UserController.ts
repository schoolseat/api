import { Request, Response } from 'express'

import { Users } from '@app/database/models'

export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  await Users.findAll()
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  await Users.findOne({ _id: req.params.id })
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function createUser(req: Request, res: Response): Promise<void> {
  await Users.add(req.body)
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}

export async function removeUser(req: Request, res: Response): Promise<void> {
  await Users.remove(req.params.id)
    .then((user) => res.send(user))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}
