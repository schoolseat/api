import { Request, Response } from 'express'

import { Messages } from '@app/database/models'

export async function getAllMessages(_req: Request, res: Response): Promise<void> {
  const messages = await Messages.findAll()

  res.send(messages)
}

export async function getMessageById(_req: Request, res: Response): Promise<void> {
  const message = await Messages.findOne({ _id: req.params.id })

  res.send(message)
}

export async function createMessage(_req: Request, res: Response): Promise<void> {
  const message = await Messages.add(req.body)

  res.send(message)
}

export async function removeMessage(_req: Request, res: Response): Promise<void> {
  const message = await Messages.remove(req.params.id)

  res.send(message)
}
