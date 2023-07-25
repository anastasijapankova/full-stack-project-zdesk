import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    fullName: {
        type: String,
        unique: false,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    department: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: false
    },
    emailVerified: {
        type: String,
        default: false
    }
})

export default mongoose.model("User", userSchema)