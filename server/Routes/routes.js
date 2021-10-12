const express=require('express');
const router=express.Router();
const mongoose=require("mongoose")
const User=mongoose.model("User")

router.get('/signup',(req,res)=>{
      res.send("hello");
})

// addinng post requst to this route
router.post('/signup', (req, res)=>{
    let {name, email, password} = req.body;
    console.log(req.body);
    if (!email || !password || !name)
    {
        return res.status(422).json({error: "Add all Data"})
    }
    return res.status(200).json({message: "DONE !"})
})

module.exports=router
