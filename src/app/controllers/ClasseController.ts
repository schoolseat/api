import { Request, Response } from 'express'

import { Classes } from '@app/database/models'

export async function getAllClasses(
  _req: Request,
  res: Response,
): Promise<void> {
  const classes = await Classes.findAll()

  res.send(classes)
}

export async function getClasseById(
  req: Request,
  res: Response,
): Promise<void> {
  const { id } = req.params
  const classe = await Classes.findOne({ _id: id })

  res.send(classe)
}

export async function createClasse(req: Request, res: Response): Promise<void> {
  const classe = await Classes.add(req.body)

  res.send(classe)
}

/**
 * @Todo: Remove bugs
 */
export async function removeClasse(req: Request, res: Response): Promise<void> {
  const classe = await Classes.remove(req.params.id)

  res.send(classe)
}
