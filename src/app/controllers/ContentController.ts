/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import { bruteContent } from '../database';
import { Request, Response } from 'express';

export async function getAllContent(req: Request, res: Response) {
    const content = bruteContent.findAll();
    res.send(await content);
  }
  export async function getContentById(req: Request, res: Response) {
    const { id } = req.params;
    const content = bruteContent.findOne({ _id: id });
    res.send(await content);
  }
  export async function createContent(req: Request, res: Response) {
    const content = bruteContent.add(req.body);
    res.send(await content);
  }
  export async function removeContent(req: Request, res: Response) {
    const { id } = req.params;
    const content = bruteContent.findByIdAndRemove({ _id: id });
    res.send(content);
  }
