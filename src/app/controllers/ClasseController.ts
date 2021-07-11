/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { bruteClasses } from '../database';
import { Request, Response } from 'express';

export async function getAllClasses(req: Request, res: Response) {
    const classes = bruteClasses.findAll();
    res.send(await classes);
  }

  export async function getClassesById(req: Request, res: Response) {
    const { id } = req.params;
    const classes = bruteClasses.findOne({ _id: id });
    res.send(await classes);
  }

  export async function createClasses(req: Request, res: Response) {
    const classes = bruteClasses.add(req.body);
    res.send(await classes);
  }

  // parece q n tá funcionano
  export async function removeClasses(req: Request, res: Response) {
    const { id } = req.params;
    const classes = bruteClasses.findByIdAndRemove({ _id: id });
    res.send(classes);
  }
/*
  async updateClasse(classe, {
    lesson, content, discipline, icon, color, bio, users,
  }) {
    const update = async (value) => (await db).classes.update(classe.id, value);
    if (lesson) {
      return update({ $set: { lesson } });
    }
    if (content) {
      return update({ $set: { content } });
    }
    if (discipline) {
      return update({ $set: { discipline } });
    }
    if (icon) {
      return update({ $set: { icon } });
    }
    if (color) {
      return update({ $set: { color } });
    }
    if (bio) {
      return update({ $set: { bio } });
    }
    if (users) {
      return update({ $set: { users } });
    }
    if (
      !lesson
        && !content
         && !discipline
         && !icon
         && !color
         && !bio
         && !users
    ) {
      throw new Error('tu esqueceu os parametro burro');
    } else {
      return (await db).classes.findById(classe.id);
    }
  },
  */
