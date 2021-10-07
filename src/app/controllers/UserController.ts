import type { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'

import { Users } from '@app/database/models'
import Mailer from '@app/services/mail'

export function getAllUsers(_req: Request, res: Response) {
  Users.findAll()
    .then(users => res.status(200).send(users))
    .catch(err => res.status(400).json({ error: err.message }))
}

export function getUserById(req: Request, res: Response) {
  Users.findOne({ _id: req.params.id })
    .then(user => res.status(200).send(user))
    .catch(err => res.status(400).json({ error: err.message }))
}

export async function createUser(req: Request, res: Response) {
  if (req.body.password.length < 6)
    return res.status(400).json({ error: 'Password is less than 6 digits' })

  if (!isEmail(req.body.email)) {
    return res.status(400).json({ message: 'Email is not valid' })
  }

  if (await Users.findOne({ email: req.body.email })) {
    return res.status(400).json({ message: 'Email already exists' })
  }

  if (await Users.findOne({ nickname: req.body.nickname })) {
    return res.status(400).json({ message: 'Nickname already used' })
  }

  return Users.add(req.body)
    .then(user => {
      const confirmToken = sign(user.email, process.env.SECRET)

      Mailer.sendMail({
        to: user.email,
        subject: 'Welcome to SchoolSeat',
        template: 'account_confirm',
        context: { user, confirmToken },
      })

      return res.status(201).send(user)
    })
    .catch(err => res.status(400).json({ error: err.message }))
}

export function removeUser(req: Request, res: Response) {
  if (req.user._id !== req.params.id && !req.user.dev)
    return res.status(403).json({ error: 'Permission denied' })

  return Users.remove(req.params.id)
    .then(user => res.send(user))
    .catch(err => res.status(400).json({ error: err.message }))
}
