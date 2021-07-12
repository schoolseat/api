/* eslint-disable no-console */
import 'dotenv/config'

import Express, { Request, Response, NextFunction } from 'express';
import { blue, magenta } from 'chalk';
import { networkInterfaces } from 'os';
// import Cors from 'cors'

const App = Express();
const Network = networkInterfaces();
const IP = Network.wlp1s0 ? Network.wlp1s0[0].address : Network[Object.keys(Network)[1]][0].address;
const PORT = process.env.PORT || 3333;

import lessonsRoute from './app/routes';

/*
const whitelist = [];

const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

App.use(Cors(corsOptions));
*/

App
  .use(Express.json())
  .use('/api', lessonsRoute)
  .listen(PORT, () => console.log(
    blue('App is running:\n'),
    magenta(`http://localhost:${PORT}/api \n http://${IP}:${PORT}/api`)
  ))
;
