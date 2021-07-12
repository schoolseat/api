/* eslint-disable class-methods-use-this */
import Database from '../database';
import { Request, Response } from 'express';


  export async function getAllLessons(req: Request, res: Response) {
    const { bruteLessons } = await Database()

    const lesson = bruteLessons.findAll();
    res.send(await lesson);
  }

  export async function getLessonsById(req: Request, res: Response) {
    const { bruteLessons } = await Database()

    const { id } = req.params;
    const lesson = bruteLessons.findOne({ _id: id });
    res.send(await lesson);
  }

  export async function createLessons(req: Request, res: Response) {
    const { bruteLessons } = await Database()

    const lesson = bruteLessons.add(req.body);
    res.send(await lesson);
  }

  export async function removeLessons(req: Request, res: Response) {
    const { bruteLessons } = await Database()
    
    const { id } = req.params;
    const lesson = bruteLessons.findByIdAndRemove({ _id: id });
    res.send(lesson);
  }
