const mongoose = require('mongoose')

const connectDB = async() => {
    console.log("connecting to DB")
    const connection = await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qg9w9.mongodb.net/users?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${connection.connection.host}`)
}

module.exports = connectDB