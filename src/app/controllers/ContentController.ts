import { Request, Response } from 'express'

import { Contents } from '@app/database/models'

export async function getAllContent(_req: Request,res: Response): Promise<void> {
  const contents = await Contents.findAll()
    .then((contents) => res.send(contents))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })  
}
export async function getContentById(req: Request,res: Response): Promise<void> {
  await Contents.findOne({ _id: req.params.id })
    .then((content) => res.send(content))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}
export async function createContent(req: Request,res: Response): Promise<void> {
  await Contents.add(req.body)
    .then((content) => res.status(201).send(content))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })  
}
export async function removeContent(req: Request,res: Response): Promise<void> {
  await Contents.remove(req.params.id)
    .then((content) => res.send(content))
    .catch((err) => {
      res.sendStatus(500)
      console.log(err)
    })
}
