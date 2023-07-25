import mongoose from "mongoose";

const { Schema } = mongoose;

const bookingSchema = new Schema({
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    desk:
    {
        type: Schema.Types.ObjectId,
        ref: 'Desk'
    },
    checkIn: {
        type: Date,
        required: true
    },
    bookedOn: {
        type: Date,
        default: Date.now
    }
})



export default mongoose.model("Booking", bookingSchema)