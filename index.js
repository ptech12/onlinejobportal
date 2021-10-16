const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose")
const morgan = require('morgan');

// configuration from .env to ./config/config.env
require('dotenv').config({
    path: "./config/config.env"
})

const app = express();


// use BOADYPARSER
app.use(bodyParser.json())


// config for dev
if (process.env.NODE_ENV === 'development')
{
    // CORS it will allow to deal with react for localhost at port 3000 without any problem
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))

    // Morgan gives information abt of each request
    app.use(morgan('dev'))

}


// Load All Routes
const authRouter = require('./Routes/auth.routes')

// USe Routes
app.use('/api/', authRouter);



app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Page Not FOUND"
    })
})



// start up the server
// server.listen(port, () => console.log("Server Running on " + port))
const PORT = process.env.PORT;
app.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})

