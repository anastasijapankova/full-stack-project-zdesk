import '../styles/Card.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react';



export function Card({ item, date }) {

    // const { item } = props
    const { _id, cityName } = item;

    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        // Check if the desk is booked for the specific date when the component mounts
        checkDeskBookedForDate();
    }, [date]);

    const checkDeskBookedForDate = async () => {
        try {
            const response = await axios.get(`/booking/check?desk=${_id}&checkIn=${date}`);
            setIsBooked(response.data.booked);
        } catch (error) {
            console.error('Error checking desk booking:', error);
        }
    };

    // const handleBookDesk = async () => {
    //     try {

    //         const response = await axios.post('/booking/add', {
    //             desk: _id,
    //             checkIn: date
    //         });

    //         console.log(response);

    //         if (response.data.success) {
    //             setIsBooked(true); // Set isBooked to true on successful booking
    //             console.log('Desk booked successfully!');
    //         } else {
    //             console.log('Error booking desk');
    //         }
    //     } catch (error) {
    //         console.error('Error booking desk:', error);
    //     }
    // };

    const handleBookDesk = async () => {
        try {
            const response = await axios.post('/booking/add', {
                desk: {
                    _id: item._id, // Desk ID
                    cityName: item.city.cityName, // City name
                    areaName: item.area.areaName, // Area name
                    floorName: item.floor.floorName, // Floor name
                    buildingName: item.building.buildingName, // Building name
                    accessibility: item.accessibility, // Accessibility option
                    individualDesk: item.individualDesk, // Individual Desk option
                    twoScreens: item.twoScreens, // Two Screens option
                    heightAdjustable: item.heightAdjustable, // Height Adjustable option
                },
                checkIn: date
            });

            console.log(response);

            if (response.data.success) {
                setIsBooked(true); // Set isBooked to true on successful booking
                console.log('Desk booked successfully!');
            } else {
                console.log('Error booking desk');
            }
        } catch (error) {
            console.error('Error booking desk:', error);
        }
    };






    return (
        <form className='card' >

            <div className='card-top-middle'>
                <div className="card-top">
                    <p className='desk-number'>Desk {item.deskName}</p>
                    {isBooked ? (
                        <p className='booked'>Booked</p> // Display "Booked" if desk is booked for the date
                    ) : (
                        <p className='book-me' onClick={handleBookDesk}>Book me</p> // Display "Book me" if desk is not booked for the date
                    )}
                </div>
                <div className="card-middle">
                    {/* <p className='desk-number'>{item.city.cityName}</p> */}
                    <p>{item.area.areaName}</p>
                    <p>Floor {item.floor.floorName}</p>
                    <p>Building {item.building.buildingName}</p>
                </div>
            </div>
            <div className="card-bottom">
                {item.accessibility && <p>Accessibility</p>}
                {item.individualDesk && <p>Individual Desk</p>}
                {item.twoScreens && <p>Two Screens</p>}
                {item.heightAdjustable && <p>Height Adjustable</p>}
            </div>


        </form >
    )
}