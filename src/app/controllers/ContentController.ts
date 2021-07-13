import { Request, Response } from 'express'

import { Contents } from '@app/database/models'

export async function getAllContent(_req: Request,res: Response): Promise<void> {
  const contents = await Contents.findAll()

  res.send(contents)
}
export async function getContentById(_req: Request,res: Response): Promise<void> {
  const content = await Contents.findOne({ _id: req.params.id })

  res.send(content)
}
export async function createContent(_req: Request,res: Response): Promise<void> {
  const content = await Contents.add(req.body)

  res.send(content)
}
export async function removeContent(_req: Request,res: Response): Promise<void> {
  const content = await Contents.remove(req.params.id)

  res.send(content)
}
