import PostMessage from "../models/postMessage.js";
// Function Contollers for Routes

// For getting POST
export const getPost = async (req, res) => {
    // res.send("This works!");
    try {
        const postMessages = await PostMessage.find();
        // console.log(postMe)
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json( {message: error.message });
    }
}

// For creating a POST
export const createPost = async (req, res) =>{
    // res.send("Post Creation");
    const body = req.body
    const newPost = new PostMessage(body);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json( {message: error.message} );
    }
}
