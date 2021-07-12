/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import Database from '../database';
import { Request, Response } from 'express';

  export async function getAllContent(req: Request, res: Response) {
    const { bruteContent } = await Database()

    const content = bruteContent.findAll();
    res.send(await content);
  }
  export async function getContentById(req: Request, res: Response) {
    const { bruteContent } = await Database()

    const { id } = req.params;
    const content = bruteContent.findOne({ _id: id });
    res.send(await content);
  }
  export async function createContent(req: Request, res: Response) {
    const { bruteContent } = await Database()

    const content = bruteContent.add(req.body);
    res.send(await content);
  }
  export async function removeContent(req: Request, res: Response) {
    const { bruteContent } = await Database()
    
    const content = bruteContent.remove(req.params.id);
    res.send(content);
  }
