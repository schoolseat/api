import { Request, Response } from 'express'

import { Contents, Classes } from '@app/database/models'

export async function getAllContent(_req: Request,res: Response): Promise<void> {
  await Contents.findAll()
    .then(contents => res.send(contents))
    .catch(err => res.status(400).json({ error: err.message }))
}
export async function getContentById(req: Request, res: Response): Promise<void> {
  await Contents.findOne({ _id: req.params.id })
    .then(content => res.send(content))
    .catch(err => res.status(400).json({ error: err.message }))
}
export async function createContent(req: Request,res: Response): Promise<void> {
  const classe = await Classes.findOne({ _id: req.body.classe })
  await Contents.add(req.body)
    .then(content => {
      classe.contents.push(content._id)
      classe.save()
      res.status(201).send(content)
    })
    .catch(err => res.status(400).json({ error: err.message }))
}
export async function removeContent(req: Request,res: Response): Promise<void> {
  await Contents.remove(req.params.id)
    .then(content => res.send(content))
    .catch(err => res.status(400).json({ error: err.message }))
}
