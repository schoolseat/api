import type { Request, Response } from 'express'

import { Notifications } from '@app/database/models'

export function getAllNotifications(_req: Request, res: Response) {
  Notifications.findAll()
    .then(Notification => res.send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function getNotificationById(req: Request, res: Response) {
  Notifications.findOne({ _id: req.params.id })
    .then(Notification => res.send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function createNotification(req: Request, res: Response) {
  Notifications.add(req.body)
    .then(Notification => res.status(201).send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function removeNotification(req: Request, res: Response) {
  Notifications.remove(req.params.id)
    .then(Notification => res.send(Notification))
    .catch(err => res.status(400).json({ error: err.message }))
}
