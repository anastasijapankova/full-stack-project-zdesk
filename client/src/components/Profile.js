// import '../styles/Profile.css'
import { useState, useContext } from "react"
import { UserContext } from '../context/userContext'
import axios from "axios";
import '../styles/Profile.css'


export function Profile() {

    const { userData } = useContext(UserContext)
    // console.log(userData)

    const [localUserData, setLocalUserData] = useState({ ...userData })

    // console.log(userData)
    // console.log(localUserData)

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch('/user/update', localUserData)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='profile'>
            <h1>My Profile</h1>
            <form className='profile-form' onSubmit={handleUpdateProfile}>
                <div className='profile-form-button'>
                    <button>Update</button>
                </div>
                <div className='profile-form-top'>
                    <div className='profilePicture'>
                        <p>Profile picture</p>
                        <label type="file">
                            <img alt="" src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
                        </label>
                    </div>
                    <div className='profile-details-top'>
                        <div className='profile-fullName'>
                            <label htmlFor="profile-fullName" >Full name</label>
                            <input type="text" name="profile-fullName" id="profile-fullName" placeholder={localUserData.fullName} value={localUserData.fullName} onChange={(e) => setLocalUserData({ ...localUserData, fullName: e.target.value })} required />
                        </div>
                        <div className='profile-department'>
                            <label htmlFor="profile-department" >Department</label>
                            <input type="text" name="profile-department" id="profile-department" placeholder={localUserData.department} value={localUserData.department} onChange={(e) => setLocalUserData({ ...localUserData, department: e.target.value })} required />
                        </div>
                        <div className='profile-role'>
                            <label htmlFor="profile-role" >Role</label>
                            <input type="text" name="profile-role" id="profile-role" placeholder={localUserData.role} value={localUserData.role} onChange={(e) => setLocalUserData({ ...localUserData, role: e.target.value })} required />
                        </div>
                    </div>
                </div>
                <div className='profile-form-bottom'>
                    <div className='profile-email'>
                        <label htmlFor="profile-email" >Email</label>
                        <input type="email" name="profile-email" id="profile-email" placeholder={localUserData.email} value={localUserData.email} onChange={(e) => setLocalUserData({ ...localUserData, email: e.target.value })} required />
                    </div>
                    <div className='profile-phoneNumber'>
                        <label htmlFor="profile-phoneNumber" >Phone number</label>
                        <input type="tel" name="profile-phoneNumber" id="profile-phoneNumber" placeholder={localUserData.phoneNumber} value={localUserData.phoneNumber} onChange={(e) => setLocalUserData({ ...localUserData, phoneNumber: e.target.value })} required />
                    </div>
                    {/* <div className='profile-password'>
                        <label htmlFor="profile-password" >Password</label>
                        <input type="password" name="profile-password" id="profile-password" placeholder={localUserData.password} value={localUserData.password} onChange={(e) => setLocalUserData({ ...localUserData, password: e.target.value })} required />
                    </div> */}

                </div>

            </form >
        </div >
    )
}