// importing user model
const expressJwt =  require("express-jwt")
const _ = require("lodash")
const { OAuth2Client } = require("google-auth-library")
const fetch = require("node-fetch")
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
// custom err handler for db errors
const { errorHandler } = require("../helpers/dbErrorHandling")
// using sendgrid for sending mail. nodemailer also works
const sgMail = require('@sendgrid/mail')



// exporting as name, email, password
exports.registerController = (req, res) => {
    const {name, email, password} = req.body
    // console.log(name, email, password);
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({
            error: firstError
        })
    }else{
        User.findOne({
            email
        }).exec((err, user) => {
            // if user exist
            if (user){
                return res.status(400).json({
                    error: "Email is Taken"
                })
            }
       })
       // Generate TOKEN
       const token = jwt.sign(
           {
               name,
               email,
               password
           },
           process.env.JWT_ACCOUNT_ACTIVATION,
           {
               expiresIn: '15m'
           }
       )

       // Email data sending
       const emailData = {
           from: process.env.EMAIL_FROM,
           to: to,
           subject:"Account Activation link",
           html:`
                <h1>Please Click link to activate </h1>
                <p>${process.env.CLIENT_URL}/users/activate/${token}</p>
                <p>${process.env.CLIENT_URL}</p>
           `
       }
    
    }
}