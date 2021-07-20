/* eslint-disable consistent-return */
import bcrypt from 'bcrypt'
import 'dotenv/config'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { Users } from '@app/database/models'

export async function loginUser(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body

  const user = await Users.model.findOne({ email }).select('+password')

  if (!user) return res.status(404).json({ error: 'User not found' })

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ error: 'Invalid password' })

  const token = jwt.sign({ id: user.id }, process.env.SECRET, {
    expiresIn: 86400,
  })

  res.send({ user, token })
}
