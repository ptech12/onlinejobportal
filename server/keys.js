const pass = process.env.DB_PASS
module.exports = {
    MONGO_URL: `mongodb+srv://testUser:${pass}@cluster0.qg9w9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
}