"use strict";
exports.__esModule = true;
/* eslint-disable no-console */
var dotenv_1 = require("dotenv");
var express_1 = require("express");
var chalk_1 = require("chalk");
var os_1 = require("os");
// const cors = require('cors');
dotenv_1["default"].config();
var network = os_1.networkInterfaces();
var ip = network.wlp1s0 ? network.wlp1s0[0].address : network[Object.keys(network)[1]][0].address;
var app = express_1["default"]();
var port = process.env.PORT || 3333;
var routes_1 = require("./src/app/routes");
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
app.use(express_1["default"].json());
app.use('/api', routes_1["default"]);
app.listen(port, function () { return console.log(chalk_1.blue('App is running: \n'), chalk_1.magenta(" http://localhost:" + port + "/api\n    http://" + ip + ":" + port + "/api")); });
