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
    // let {text} = req.body;
    console.log(req.body);
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    const options = {
            from: req.body.mail,
            to: "test@test.com",
            subject: "Text Mail",
            html: `
            <div className="email" style="
            border: 1px solid black;
            padding: 20px;
            line-height: 2;
            font-size: 20px;"> 
            <h2> Here your mail!</h2>
            <h4>${req.body.name}</h4>
            <p>Message</p>
            <br />
            <p>${req.body.text}</p>
            </div>
            `
        }
   
    await transport.sendMail(options, (err, info) => {
            if (err) {
                console.log(err);
            }
            console.log("Info :", info);
            res.json({
                message: "Email successfully sent"
            });
        }
    );

    // Ack Mail Transporter
    //  const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.MAIL_FROM,
    //         pass: process.env.MAIL_FROM_PASS
    //     }
    // }
        
    // )
    // await transporter.sendMail({
    //     from:process.env.MAIL_FROM,
    //     to: req.body.email,
    //     subject: "Text Mail",
    //     html: `
    //     <div className="email" style="
    //     border: 1px solid black;
    //     padding: 20px;
    //     line-height: 2;
    //     font-size: 20px;"> 
    //     <h2> Here your mail!</h2>
    //     <h4>Your mail is recived</h4>
    //     <p>Message</p>
    //     <br />
    //     <p>Thanks for contacting us!. We will reach you soon.</p>
    //     </div>
    //     `
    // }, (err, info) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         console.log("Info :", info);
    //         res.json({
    //             message: "Email successfully sent"
    //         });
    //     }
    // )

})

// start up the server
app.listen((process.env.PORT | 4000), ()=> {
    console.log("listening on 4000")
})

