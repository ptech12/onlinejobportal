const express = require('express');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');

// USing Body Parser and cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// start up the server
app.listen((process.env.PORT | 4000), ()=> {
    console.log("listening on 4000")
})

