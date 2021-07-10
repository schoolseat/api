/* eslint-disable no-console */
import dotenv from 'dotenv';
import express from 'express';
import { blue, magenta } from 'chalk';
import { networkInterfaces } from 'os';
// const cors = require('cors');

dotenv.config()

let network = networkInterfaces();
let ip = network.wlp1s0 ? network.wlp1s0[0].address : network[Object.keys(network)[1]][0].address

const app = express();

const port = process.env.PORT || 3333;

import lessonsRoute from './src/app/routes';

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

app.use(cors(corsOptions));
*/

app.use(express.json());
app.use('/api', lessonsRoute);

app.listen(port, () => console.log(
    blue('App is running: \n'),
    magenta(` http://localhost:${port}/api
    http://${ip}:${port}/api`)
));
