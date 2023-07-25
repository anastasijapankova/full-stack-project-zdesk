import mongoose from "mongoose";

const { Schema } = mongoose;

const buildingSchema = new Schema({
    buildingName: {
        type: String,
        unique: true,
        required: true
    },
    city:
    {
        type: Schema.Types.ObjectId,
        ref: 'City'
    }
})

export default mongoose.model("Building", buildingSchema)