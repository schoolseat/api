/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import Database from '../database';
import { Request, Response } from 'express';

  /**
   * @returns get all users
   */
   export async function getAllUsers(req: Request, res: Response){
    const { bruteUsers } = await Database()

    const users = await bruteUsers.findAll();
    return res.send(await users);
  }
  /**
   * @returns Get a user by their id
   */
  export async function getUserById(req: Request, res: Response) {
    const { bruteUsers } = await Database()

    const { id } = req.params;
    const users = await bruteUsers.findOne({ _id: id });
    return res.send(await users);
  }
  /**
   * @returns Create a user
   */
   export async function createUser(req: Request, res: Response) {
    const { bruteUsers } = await Database()

    const users = await bruteUsers.add(req.body);
    return res.send(await users);
  }
  /**
   * @returns Remove a user by their _id
   */
   export async function removeUser(req: Request, res: Response) {
    const { bruteUsers } = await Database()

    const { id }  = req.params;
    const users = await bruteUsers.findByIdAndRemove(id);
    return res.send(users);
  }
/*
  async updateUser(user, {
    classes, nickname, name, bio, email, password, profilePic, level, xp,
  }) {
    const update = async (value) => (await db).users.update(user._id, value);
    if (classes) {
      return update({ $set: { classes } });
    }
    if (nickname) {
      return update({ $set: { nickname } });
    }
    if (name) {
      return update({ $set: { name } });
    }
    if (bio) {
      return update({ $set: { bio } });
    }
    if (email) {
      return update({ $set: { email } });
    }
    if (password) {
      return update({ $set: { password } });
    }
    if (profilePic) {
      return update({ $set: { profilePic } });
    }
    if (level) {
      return update({ $set: { level } });
    }
    if (xp) {
      return update({ $set: { xp } });
    }
    if (
      !classes
        && !nickname
        && !name
        && !bio
        && !email
        && !password
        && !profilePic
        && !level
        && !xp
    ) {
      throw new Error('tu esqueceu os parametro burro');
    } else {
      return (await db).users.findById(user.id);
    }
  },
  */
