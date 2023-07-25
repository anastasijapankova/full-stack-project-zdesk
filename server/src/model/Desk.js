import mongoose from "mongoose";

const { Schema } = mongoose;

const deskSchema = new Schema({
    deskName: {
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
    },
    area:
    {
        type: Schema.Types.ObjectId,
        ref: 'Area'
    },
    accessibility: {
        type: Boolean,
        required: true
    },
    individualDesk: {
        type: Boolean,
        required: true
    },
    twoScreens: {
        type: Boolean,
        required: true
    },
    heightAdjustable: {
        type: Boolean,
        required: true
    }
})

export default mongoose.model("Desk", deskSchema)