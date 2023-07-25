import { Outlet } from "react-router-dom"
import { SideBar } from "../components/SideBar"
import '../styles/UserLayout.css'


export function UserLayout() {

    return (
        <div className="userlayout">
            <SideBar className='sidebar' />
            <Outlet className='outlet' />
        </div>
    )
}