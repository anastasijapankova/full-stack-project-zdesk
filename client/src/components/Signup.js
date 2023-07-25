import '../styles/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useState } from 'react'
import axios from 'axios'

export function Signup() {

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const [termsAccepted, setTermsAccepted] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            if (!termsAccepted) {
                setShowAlert(true)
                // return alert('Please accept the terms and conditions')
                return
            }

            console.log(userData)
            const response = await axios.post('/user/sign-up', userData)
            console.log(response)
            if (response.data.success) navigate('/')
            setUserData({
                fullName: '',
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className='signupPage'>
            <form className='form' action="#">
                <h1>Create your account</h1>
                <div className='fullName'>
                    <label htmlFor="fullName" >Full name</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Enter your full name" required onChange={e => setUserData({ ...userData, fullName: e.target.value })} value={userData.fullName} />
                </div>
                <div className='email'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" required onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} />
                </div>
                <div className='password'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" placeholder="Must have at least 8 characters" required onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} />
                </div>
                <div className={`terms ${showAlert ? 'checkbox-alert' : ''}`}>
                    <input id="terms" aria-describedby="terms" type="checkbox" checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} required />
                    <label htmlFor="terms">I agree to all <Link><span>Terms</span></Link> and <Link><span>Privacy Policy</span></Link></label>

                </div>
                <button type="submit" className='button' onClick={handleSignUp}>Sign Up</button>
            </form>
            <div className='account'>
                <p >Have an account? <Link to="/" className='logIn'>Log in</Link></p>
            </div>


        </div>
    )
}