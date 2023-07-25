import Booking from "../model/Booking.js";


export const handleBookingAdd = async (req, res) => {
    console.log("handleBookingAdd:", req.body);

    try {
        req.body.user = req.user
        const newBooking = await Booking.create(req.body);
        console.log("handleBookingAdd:", newBooking);
        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error creating new booking", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};

export const handleBookingUser = async (req, res) => {
    try {
        const userId = req.user;
        const bookings = await Booking.find({ user: userId }).populate({
            path: 'desk',
            populate: {
                path: 'city',
                model: 'City'
            }
        }).populate({
            path: 'desk',
            populate: {
                path: 'floor',
                model: 'Floor'
            }
        }).populate({
            path: 'desk',
            populate: {
                path: 'building',
                model: 'Building'
            }
        }).populate({
            path: 'desk',
            populate: {
                path: 'area',
                model: 'Area'
            }
        })



        console.log("handleBookingUser:", bookings);
        res.status(200).send({ success: true, bookings });
    } catch (error) {
        console.log("Error fetching bookings by user id", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};

export const handleBookingCheck = async (req, res) => {
    try {
        const { desk, checkIn } = req.query;

        // Check if there is a booking for the given desk and date
        const existingBooking = await Booking.findOne({ desk, checkIn });

        if (existingBooking) {
            // If booking is found, the desk is already booked for the date
            res.send({ booked: true });
        } else {
            // If no booking is found, the desk is available for booking
            res.send({ booked: false });
        }
    } catch (error) {
        console.log("Error checking desk booking:", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};

export const handleBookingDelete = async (req, res) => {
    try {

        const bookingID = req.body._id;

        const deleteBooking = await Booking.findById(bookingID);
        if (!bookingID) {
            return res.status(404).send({ success: false, message: 'Booking not found' });
        }
        await Booking.findByIdAndDelete(bookingID);

        res.status(200).send({ success: true });

    } catch (error) {

        res.status(500).send({ success: false, message: error.message });
    }
};

