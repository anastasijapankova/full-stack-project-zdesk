import { useState } from 'react'
import '../styles/ForgotPassword.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function ForgotPassword() {

    const navigate = useNavigate()

    const [userEmail, setUserEmail] = useState('')

    const handleSubmit = async () => {

        if (!userEmail) return

        const response = await axios.post('/user/forgot-password', { email: userEmail })
        console.log(response)

        if (response.data.success)
            alert('Thank you we have sent you email with instructions how to change password')
        navigate('/')

    }

    return (
        <div className='forgotPasswordPage'>
            <form className='form' action="#">
                <h1>Forgot password?</h1>
                <p>Please enter the email associated with your account and we’ll send an email with link, where you can change your password.</p>
                <div className='email'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                </div>
                <button type="submit" onClick={handleSubmit} className='button'>Send</button>
            </form>
            <div >
                <p>Or you can <Link to="/" className='logIn'>Log in</Link></p>
            </div>
        </div>
    )
}