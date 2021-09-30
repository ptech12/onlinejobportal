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

// making mail script
app.post("/send", cors(), async (req, res) => {
    let {text} = req.body;
    let transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    await transport.sendMail(
        {
            from:process.env.MAIL_FROM,
            to: "testip86@gmail.com",
            subject: "Text Mail",
            html:
            `
            <div className="email" style="
            border: 1px solid black;
            padding: 20px;
            line-height: 2;
            font-size: 20px;"> 
            <h2> Here your mail!</h2>
            <p>${text}</p>
            </div>
            `
        }

    );


})

// start up the server
app.listen((process.env.PORT | 4000), ()=> {
    console.log("listening on 4000")
})

