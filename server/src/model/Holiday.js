import mongoose from "mongoose";

const { Schema } = mongoose;

const holidaySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    date: {
        type: Date,
        unique: true,
        required: true
    }
})

export default mongoose.model("Holiday", holidaySchema)