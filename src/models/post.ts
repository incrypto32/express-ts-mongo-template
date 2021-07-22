import { Document, model, Model, Schema } from 'mongoose';


export interface IPost extends Document {
    title: string;
    description: number;
    imageUrl: number;
}

export const postSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});


export const Post: Model<IPost> = model('post', postSchema)
