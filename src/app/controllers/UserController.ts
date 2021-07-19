/* eslint-disable consistent-return */
import { Request, Response } from 'express'

import { Users } from '@app/database/models'

export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  await Users.findAll()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function getUserById(req: Request, res: Response): Promise<void> {
  await Users.findOne({ _id: req.params.id })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function createUser(req: Request, res: Response): Promise<void> {
  if (await Users.findOne({ email: req.body.email })) {
    return res.status(400).json({ message: 'email already exists' })
  }

  await Users.add(req.body)
    .then(user => res.status(201).send(user))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function removeUser(req: Request, res: Response): Promise<void> {
  await Users.remove(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.status(400).json({ error: err.message }))
}
