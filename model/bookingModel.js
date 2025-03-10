import e from "express";
import mongoose from "mongoose";


const bookingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
})

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;