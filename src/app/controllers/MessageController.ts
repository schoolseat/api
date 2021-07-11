/* eslint-disable class-methods-use-this */
import { bruteMessages } from '../database';
import { Request, Response } from 'express';

  export async function getAllMessages(req: Request, res: Response) {
    const messages = bruteMessages.findAll();
    return res.send(await messages);
  }

  export async function getMessagesById(req: Request, res: Response) {
    const { id } = req.params;
    const messages = bruteMessages.findOne({ _id: id });
    return res.send(await messages);
  }

  export async function createMessages(req: Request, res: Response) {
    const messages = bruteMessages.add(req.body);
    return res.send(await messages);
  }

  export async function removeMessages(req: Request, res: Response) {
    const { id } = req.params;
    const messages = bruteMessages.findByIdAndRemove({ _id: id });
    return res.send(messages);
  }

