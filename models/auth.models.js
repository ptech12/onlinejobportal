const mongoose = require('mongoose')
const crypto = require('crypto')

// User Schema
const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: true,
            trim: true
        },
        name: {
            type: String,
            trim: true,
            required: true
        },
        
        hashed_passsword: {
            type: String,
            // trim: true
            // lowercase: true,
            required: true
        },
        salt: String,
        role:{
            type: String,
            default: "employee"
            // available roles: "employee", "employer", "admin"
        },
        resetPasswordLink:{
            data: String,
            default: ''
        }
    }, 
    {
        timeStamp: true
    }
)

// Virtual Password
userSchema.virtual('password')
    .set(function(password) {
        // set password
        this.password = password
        // set salt
        this.salt = this.makeSalt();
        // encrypt password
        this.hashed_passsword = this.encryptPassword(password)

    })
    .get( function (){
        return this.__password
    })

// Methods
userSchema.methods = {
    // Method to Genreate Salts
    makeSalt: function() {
        return Math.round(new Date().valueOf() * Math.random()) + ''
    },
    // Encrypt PAssword
    encryptPassword: function (password) {
        if(!password) return ''
        // ecnrypting password using sha1 algorithm
        try{
            return crypto
                .Hmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        }catch( err)
        {
            return ''
        }
    },
    // Comppare password between plain user and hashed
    authenticate: function(plainPassword){
        return this.encryptPassword(plainPassword) === this.hashed_password
    }
}

// exporting user model
module.exports = mongoose.model('User', userSchema);