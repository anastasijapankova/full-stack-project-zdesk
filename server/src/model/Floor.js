import mongoose from "mongoose";

const { Schema } = mongoose;

const floorSchema = new Schema({
    floorName: {
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
    }
})

export default mongoose.model("Floor", floorSchema)