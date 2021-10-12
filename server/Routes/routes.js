const express = require("express")
// creatring router
const router = express.Router()

const mongoose = require("mongoose")
const User = mongoose.model("User")


router.get("/signup", (req, res) => {
    res.send("This is signup page");
})

module.export = router