import '../styles/SideBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { PiHouseBold } from 'react-icons/pi'
import { PiCalendarBold } from 'react-icons/pi'
import { PiUserCircleBold } from 'react-icons/pi'
import { useState, useContext } from "react"
import { UserContext } from '../context/userContext'
import axios from 'axios'

export function SideBar() {

    const navigate = useNavigate()

    const { userData, logout } = useContext(UserContext)

    const handleLogout = async () => {

        const response = await axios.post('/user/logout')
        console.log(response.data)

        logout()
        navigate("/")
    }

    console.log(userData)
    return (
        <div className='sideBar'>
            <div className='sideBar-top'>
                <div>
                    <img src="profileImage" />
                    <p className='sideBar-name'>{userData.fullName}</p>
                    <p>{userData.email}</p>
                </div>
                <nav>
                    <Link to='/dashboard' className='nav-item'><PiHouseBold />Dashboard</Link>
                    <Link to='/my-bookings' className='nav-item'><PiCalendarBold />My Bookings</Link>
                    <Link to='/my-profile' className='nav-item'><PiUserCircleBold />My profile</Link>
                </nav>
            </div>

            <div className='sideBar-bottom'>
                <button onClick={handleLogout}>Sign out</button>
            </div>

        </div>
    )
}