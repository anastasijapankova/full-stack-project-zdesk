import mongoose from "mongoose";

const { Schema } = mongoose;

const citySchema = new Schema({
    cityName: {
        type: String,
        unique: true,
        required: true
    }
})

export default mongoose.model("City", citySchema)