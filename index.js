const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require("cors");
const nodemailer = require('nodemailer');
const mongoose = require("mongoose")
const path = require('path')
const http = require('http')
const {MONGO_URL} = require('./config/keys')
require("./models/user")
const mainRoutes = require("./Routes/routes")

// USing Body Parser and cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(mainRoutes)
// connecting to mongoose
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// on successfull connection
mongoose.connection.on("connected", () => console.log("Connection success"))

// on not successfull connection
mongoose.connection.on("error", () => console.log("error!! ")  )

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

// Serve statics assests if it in production
// if ( process.env.NODE_ENV === 'production' )
// {
//     // set static folder
//     app.use("/static", express.static(path.join(__dirname, 'client/build')));
    
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }



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
// serve the static assests
app.use(express.static(path.join(__dirname, 'build')))
const port = 8080 || process.env.PORT
app.set('port', port);
const server = http.createServer(app);

// start up the server
server.listen(port, () => console.log("Server Running on " + port))

// app.listen((process.env.PORT || 5000), ()=> {
//     console.log("listening on 5000")
// })

