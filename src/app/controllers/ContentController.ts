import { Request, Response } from 'express'

import { Contents } from '@app/database/models'

export async function getAllContent(
  _req: Request,
  res: Response,
): Promise<void> {
  const contents = await Contents.findAll()

  res.send(contents)
}
export async function getContentById(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params
  const content = await Contents.findOne({ _id: id })

  res.send(content)
}
export async function createContent(
  req: Request,
  res: Response,
): Promise<void> {
  const content = await Contents.add(req.body)

  res.send(content)
}
export async function removeContent(
  req: Request,
  res: Response,
): Promise<void> {
  const content = await Contents.remove(req.params.id)

  res.send(content)
}
