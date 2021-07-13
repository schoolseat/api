import { Request, Response } from 'express'

import { Messages } from '@app/database/models'

export async function getAllMessages(
  _req: Request,
  res: Response,
): Promise<void> {
  const messages = await Messages.findAll()

  res.send(messages)
}

export async function getMessageById(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params
  const message = await Messages.findOne({ _id: id })

  res.send(message)
}

export async function createMessage(
  req: Request,
  res: Response,
): Promise<void> {
  const message = await Messages.add(req.body)

  res.send(message)
}

export async function removeMessage(
  req: Request,
  res: Response,
): Promise<void> {
  const message = await Messages.remove(req.params.id)

  res.send(message)
}
