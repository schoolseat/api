import { Request, Response } from 'express'

import { Messages } from '@app/database/models'

export async function getAllMessages(
  _req: Request,
  res: Response,
): Promise<void> {
  await Messages.findAll()
    .then(messages => res.send(messages))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function getMessageById(
  req: Request,
  res: Response,
): Promise<void> {
  await Messages.findOne({ _id: req.params.id })
    .then(message => res.send(message))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function createMessage(
  req: Request,
  res: Response,
): Promise<void> {
  await Messages.add(req.body)
    .then(message => res.status(201).send(message))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function removeMessage(
  req: Request,
  res: Response,
): Promise<void> {
  await Messages.remove(req.params.id)
    .then(message => res.send(message))
    .catch(err => res.status(400).json({ error: err.message }))
}
