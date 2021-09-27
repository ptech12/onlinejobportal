import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';
const app = express();

app.use('/posts', postRouter)
app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

// MangoDB connection setup
const CONNECTION_URL = "mongodb+srv://uusername:password@cluster0.qg9w9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=>console.log(`Server running on PORT: ${PORT}`)))
    .catch( (err) => { console.log(err.message);});


// mongoose.set('useFindAndModify', false);
