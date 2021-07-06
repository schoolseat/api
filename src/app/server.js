/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const { blue, magenta } = require('chalk');
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const app = express();

const port = process.env.PORT || 3333;
const lessonsRoute = require('./routes');

app.use(express.json());
app.use('/api', lessonsRoute);

app.listen(port, () => console.log(
  blue('  server online \n'),
  magenta(` http://localhost:${port}/api
  http://${nets.wlp1s0[0].address}:${port}/api`),
));
