import { Document, model, Model, Schema } from 'mongoose';

export interface IUser extends Document {
    _id: string;
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: { 
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
})

export const User: Model<IUser> = model('user', userSchema)
