import mongoose from "mongoose";

const { Schema } = mongoose;

const areaSchema = new Schema({
    areaName: {
        type: String,
        unique: true,
        required: true
    },
    city:
    {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    building:
    {
        type: Schema.Types.ObjectId,
        ref: 'Building'
    },
    floor:
    {
        type: Schema.Types.ObjectId,
        ref: 'Floor'
    }
})

export default mongoose.model("Area", areaSchema)