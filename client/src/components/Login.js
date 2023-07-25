import { useState, useContext } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { PiEyeClosedBold, PiEyeBold } from 'react-icons/pi'
import { UserContext } from '../context/userContext'

export function Login() {
    const { userData, setUserData } = useContext(UserContext)

    const navigate = useNavigate()

    const [localUserData, setLocalUserData] = useState({ email: '', password: '' })


    // const { userData, setUserData } = useContext(UserContext)

    // const [error, setError] = useState('')

    const [showPassword, setShowPassword] = useState(false)


    const handleLogin = async (e) => {
        e.preventDefault()
        try {

            if (!localUserData.email || !localUserData.password) {
                setLocalUserData({
                    email: '',
                    password: ''
                })
                // return alert("Missing username or password")
                // return setError("Missing username or password")
                navigate('/missing-email-password')

            }

            // console.log(userData)
            const response = await axios.post('/user/login', localUserData)
            console.log(response)

            if (response.data.success === false) {
                // return alert("Wrong username of password")
                // return setError("Wrong username of password")
                navigate('/incorrect-email-password')
            }

            if (response.data.success) {
                setUserData({ ...response.data.user })
                navigate("/dashboard")

            }


        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='loginPage'>
            <form className='form' action="#">
                <h1>Login</h1>
                <div className='email'>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" onChange={e => setLocalUserData({ ...localUserData, email: e.target.value })} value={localUserData.email} required />
                </div>
                <div className='password'>
                    <label htmlFor="password" >Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" onChange={e => setLocalUserData({ ...localUserData, password: e.target.value })} value={localUserData.password} required />
                    {
                        showPassword ? (
                            <PiEyeClosedBold className="password-icon" onClick={() => setShowPassword(prev => !prev)} />
                        ) : (
                            < PiEyeBold className="password-icon" onClick={() => setShowPassword(prev => !prev)} />
                        )
                    }
                </div>
                <div className='remember-forgot'>
                    <div className='remember'>
                        <input id="remember" aria-describedby="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className='forgot'>
                        <Link to="/forgot-password" >Forgot password?</Link>
                    </div>
                </div>
                {/* <div className='error-message'>
                    {error}
                </div> */}
                <button type="submit" className='button' onClick={handleLogin}>Login</button>
            </form>
            <div className='noAccount'>
                <p >Don’t have an account? <Link to="/sign-up" className='signUp'>Sign up</Link></p>
            </div>


        </div>
    )
}