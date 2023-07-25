import '../styles/MissingEmailPassword.css'
import { Link } from 'react-router-dom'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


export function MissingEmailPassword() {

    return (
        <div className='missingEmailPasswordPage'>
            <div className='missingEmailPassword' action="#">
                <div className='missingEmailPassword-text'>
                    <h1>Missing email or password</h1>
                    <p>Please make sure you have provided both your email address and password to proceed.</p>
                </div>
                <Link to="/"><button type="submit" className='button'>Try again</button></Link>
            </div>
        </div>
    )
}