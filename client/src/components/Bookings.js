import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { MyCard } from './MyCard'
import '../styles/Bookings.css';


export function Bookings() {

    const [futureBookings, setFutureBookings] = useState([]);
    const [pastBookings, setPastBookings] = useState([])


    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('/booking/user');

                const userBookings = response.data.bookings;
                console.log("BOOKINGS", userBookings)

                // Filter bookings to get future bookings with checkIn date greater than today
                const filteredFutureBookings = userBookings.filter((booking) => {
                    const today = new Date();
                    const bookingDate = new Date(booking.checkIn); // Assuming checkIn property holds the booking date
                    return bookingDate >= today;
                });

                // Filter bookings to get past bookings with checkIn date less than or equal to today
                const filteredPastBookings = userBookings.filter((booking) => {
                    const today = new Date();
                    const bookingDate = new Date(booking.checkIn); // Assuming checkIn property holds the booking date
                    return bookingDate < today;
                });

                setFutureBookings(filteredFutureBookings);
                setPastBookings(filteredPastBookings);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);





    return (
        <div className="bookings">
            <div className="bookings-top">
                <h1>Upcoming bookings</h1>
                <div className="future-bookings">
                    {futureBookings.map((booking) => (
                        <MyCard key={booking._id} booking={booking} />

                    ))}
                </div>
            </div>
            <div className="bookings-bottom">
                <h1>Previous bookings</h1>
                <div className="past-bookings">
                    {pastBookings.map((booking) => (
                        <MyCard key={booking._id} booking={booking} />

                    ))}
                </div>
            </div>
        </div>
    );
}