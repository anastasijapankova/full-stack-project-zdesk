import React from 'react';
import '../styles/LoginLayout.css'
import { Outlet } from "react-router-dom"
import { Start } from "../components/Start"
import { useWindowSize } from '../customHooks/useWindowSize'


export function LoginLayout() {

    const size = useWindowSize();

    return (
        <div className='loginlayout'>
            {size.width > 768 && <Start />}
            <Outlet />
        </div>
    )
}