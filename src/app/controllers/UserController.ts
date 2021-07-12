import { Request, Response } from 'express'

import { Users } from '@app/database/models'

/**
 * @returns get all users
 */
export async function getAllUsers(_req: Request, res: Response): Promise<void> {
  const users = await Users.findAll()

  res.send(users)
}

/**
 * @returns Get a user by their id
 */
export async function getUserById(req: Request, res: Response): Promise<void> {
  const { id } = req.params
  const user = await Users.findOne({ _id: id })

  res.send(user)
}

/**
 * @returns Create a user
 */
export async function createUser(req: Request, res: Response): Promise<void> {
  const user = await Users.add(req.body)

  res.send(user)
}

/**
 * @returns Remove a user by their _id
 */
export async function removeUser(req: Request, res: Response): Promise<void> {
  const user = await Users.remove(req.params.id)

  res.send(user)
}
