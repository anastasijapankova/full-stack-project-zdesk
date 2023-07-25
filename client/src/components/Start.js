import '../styles/Start.css'
import logo from '../assets/logo.png'
import illustration from '../assets/illustration.png'
import { Link } from 'react-router-dom'

export function Start() {

    return (
        <div className='starterPage'>
            <Link to="/"><img src={logo} alt="" className='logo' /></Link>
            <img src={illustration} alt="" className='illustration' />
            <p className='slogan'>Simple desk booking software for hybrid workplaces</p>
        </div>
    )
}