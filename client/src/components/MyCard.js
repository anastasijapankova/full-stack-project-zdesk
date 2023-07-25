import '../styles/MyCard.css'
import { FiTrash } from 'react-icons/fi'
import axios from 'axios';
import { useState } from 'react';



export function MyCard({ booking }) {

    const [bookings, setBookings] = useState([booking]);

    const {
        desk: {
            area,
            floor,
            building,
            city, deskName,
            accessibility,
            individualDesk,
            twoScreens,
            heightAdjustable
        },
        date
    } = booking;


    // Assuming the date in booking.checkIn is a valid date object or a string in a recognized date format
    const dateInput = new Date(booking.checkIn); // If it's already a date object, you can skip this line

    // Create an options object for the desired date format
    const options = {
        weekday: 'short', // Short weekday name (e.g., "Fri")
        day: 'numeric',   // Numeric day of the month (e.g., 28)
        month: 'short',   // Short month name (e.g., "Jul")
        year: undefined,  // Exclude the year from the format
    };

    // Format the date
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateInput);

    // Check if the booking date is in the future compared to the current date
    const isFutureBooking = dateInput.getTime() > new Date().getTime();

    const handleBookingDelete = (bookingId) => {

        axios
            .delete("/booking/delete/" + bookingId)

            .then((response) => {
                // Handle successful response
                console.log(response.data);

                const updatedBookings = bookings.filter(booking => booking._id !== bookingId)
                setBookings(updatedBookings)


            })
            .catch((error) => {
                // Handle error
                // alert("there was an error")
                console.error(error);
            });
    }


    return (

        <form className='mybookings-card'>
            <div className='mybookings-card-top-middle'>
                <div className="mybookings-card-top">
                    <div className="mybookings-card-top-1">
                        <p className="mybookings-date">{formattedDate}</p>
                        <p className="mybookings-desk-number">Desk {deskName}</p>
                    </div>
                    <div>
                        {/* <FiTrash className='trash-icon' /> */}
                        {isFutureBooking && <FiTrash className="trash-icon" onClick={() => handleBookingDelete(booking._id)} />}
                    </div>
                </div>
                <div className="mybookings-card-middle">
                    <p>{area.areaName}</p>
                    <p>Floor {floor.floorName}</p>
                    <p>Building {building.buildingName}</p>
                    {/* <p>City: {city.cityName}</p> */}
                </div>


            </div>

            <div className="card-bottom">
                {accessibility && <p>Accessibility</p>}
                {individualDesk && <p>Individual Desk</p>}
                {twoScreens && <p>Two Screens</p>}
                {heightAdjustable && <p>Height Adjustable</p>}
            </div>
        </form>
    )
}