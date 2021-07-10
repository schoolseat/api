/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const { blue, magenta } = require('chalk');
const { networkInterfaces } = require('os');
// const cors = require('cors');

let network = networkInterfaces();
  network.wlp1s0 ? network = network.wlp1s0[0].address : network = network[Object.keys(network)[1]][0].address
const app = express();

const port = process.env.PORT || 3333;

const lessonsRoute = require('./src/app/routes');

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
    http://${network}:${port}/api`)
));
