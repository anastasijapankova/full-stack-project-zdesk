import '../styles/Error404.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export function Error404() {
    return (

        <div className='error404'>
            <div>
                <img src={logo} alt="" className='logo' />
            </div>
            <div className='error404-text'>
                <h1>404</h1>
                <p>THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST</p>
            </div>
            <div>
                <Link to="/"><button type="submit" className='button'>Go Home</button></Link>
            </div>

        </div>
    )
}