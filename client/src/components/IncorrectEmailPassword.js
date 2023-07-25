import '../styles/IncorrectEmailPassword.css'
import { Link } from 'react-router-dom'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


export function IncorrectEmailPassword() {

    return (
        <div className='incorrectEmailPasswordPage'>
            <div className='incorrectEmailPassword' action="#">
                <div className='incorrectgEmailPassword-text'>
                    <h1>Incorrect email or password</h1>
                    <p>Please ensure that you have entered the correct email address and password combination.</p>
                </div>
                <Link to="/"><button type="submit" className='button'>Try again</button></Link>
            </div>
        </div>
    )
}