/* eslint-disable consistent-return */
import bcrypt from 'bcrypt'
import 'dotenv/config'
import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken'

import { Users } from '@app/database/models'

export async function loginUser(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body

  const user = await Users.model.findOne({ email }).select('+password')

  if (!user) return res.status(404).json({ error: 'User not found' })

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(400).json({ error: 'Invalid password' })

  const token = JWT.sign({ id: user.id }, process.env.SECRET, { expiresIn: 86400 })

  res.send({ user, token })
}
export async function verifyJWT(req: Request, res: Response, next: NextFunction) {
    console.log('hi', req.headers)
    const token = req.headers['x-access-token']
    if (!token) return res.status(401).send({error: 'No token provided'})
    
    JWT.verify(token, process.env.SECRET, async (err, decoded) => {
        if (err) return res.status(500).send({error: 'Failed to authenticate token, please try again'})

        const user = await Users.findOne({_id: decoded.id})
        req.user = user
        next()
    })
}