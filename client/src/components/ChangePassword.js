import '../styles/ChangePassword.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

export function ChangePassword(props) {

    const navigate = useNavigate()

    const { token } = useParams()

    const [password, setPassword] = useState({
        newPassword: '',
        confirmedNewPassword: ''
    })

    const handleSubmit = async () => {
        if (!password.newPassword || password.newPassword !== password.confirmedNewPassword) {
            alert("Passwrds don't match")
            return
        }

        const response = await axios.post('/user/create-new-password', { token, password: password.newPassword })
        console.log(response)

        if (response.data.success)
            alert('Password changed')
        navigate('/')

    }

    return (
        <div className='changePasswordPage'>
            <form className='form' action="#">
                <h1>Create new password</h1>
                <p>Your new password must be different from previous used passwords.</p>
                <div className='password'>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your new passworm" value={password.newPassword} onChange={(e) => setPassword({ ...password, newPassword: e.target.value })} required />
                    <p >Must be at least 8 characters</p>
                </div>
                <div className='password'>
                    <label htmlFor="password" >Confirm password</label>
                    <input type="password" name="password" id="password" placeholder="Retype your new password" value={password.confirmedNewPassword} onChange={(e) => setPassword({ ...password, confirmedNewPassword: e.target.value })} required />
                    <p >Both passwords must match</p>
                </div>
                <button type="submit" className='button' onClick={handleSubmit}>Reset Password</button>
            </form>
            <div >
                <p>Or you can <Link to="/" className='logIn'>Log in</Link></p>
            </div>
        </div>
    )

}
