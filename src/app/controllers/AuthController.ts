import bcrypt from 'bcrypt'
import type { Request, Response, NextFunction } from 'express'
import JWT, { JwtPayload } from 'jsonwebtoken'

import { Users } from '@app/database/models'

interface IPayload extends JwtPayload {
  id: string
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body

  const user = await Users.findOne({ email }, 'password')

  if (!user) return res.status(404).json({ error: 'User not found' })

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ error: 'Invalid password' })

  const token = JWT.sign({ id: user.id }, process.env.SECRET, {
    expiresIn: 86400,
  })

  return res.send({ email, token })
}
export async function verifyJWT(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const token = req.headers['x-access-token']
  if (!token) return res.status(401).send({ error: 'No token provided' })

  return JWT.verify(
    token,
    process.env.SECRET,
    async (err, decoded: IPayload) => {
      if (err)
        return res.status(401).send({ error: 'Token provided is invalid' })

      const user = await Users.findOne({ _id: decoded.id })
      req.user = user

      return next()
    },
  )
}
