import type { Request, Response } from 'express'

import { Contents } from '@app/database/models'

export function getAllContent(_req: Request, res: Response) {
  Contents.findAll()
    .then(contents => res.send(contents))
    .catch(err => res.status(400).json({ error: err.message }))
}
export function getContentById(req: Request, res: Response) {
  Contents.findOne({ _id: req.params.id })
    .then(content => res.send(content))
    .catch(err => res.status(400).json({ error: err.message }))
}
export function createContent(req: Request, res: Response) {
  Contents.add(req.body)
    .then(content => res.status(201).send(content))
    .catch(err => res.status(400).json({ error: err.message }))
}
export function removeContent(req: Request, res: Response) {
  Contents.remove(req.params.id)
    .then(content => res.send(content))
    .catch(err => res.status(400).json({ error: err.message }))
}
