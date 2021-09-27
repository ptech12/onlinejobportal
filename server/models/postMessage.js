import mongoose from 'mongoose';
// Creating Mongoose Schema

const postSchema = mongoose.Schema(
    {
        title: String,
        msg: String,
        createdBy: String,
        tags: [String],
        selectedFile: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }
)

// turning into model
const PostMessage = mongoose.model(' PostMessage ', postSchema);

export default PostMessage;
