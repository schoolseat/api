import { Request, Response } from 'express'

import { Notifications } from '@app/database/models'

export async function getAllNotifications(
  _req: Request,
  res: Response,
): Promise<void> {
  await Notifications.findAll()
    .then(Notification => res.send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function getNotificationById(
  req: Request,
  res: Response,
): Promise<void> {
  await Notifications.findOne({ _id: req.params.id })
    .then(Notification => res.send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function createNotification(
  req: Request,
  res: Response,
): Promise<void> {
  await Notifications.add(req.body)
    .then(Notification => res.status(201).send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function removeNotification(
  req: Request,
  res: Response,
): Promise<void> {
  await Notifications.remove(req.params.id)
    .then(Notification => res.send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}
