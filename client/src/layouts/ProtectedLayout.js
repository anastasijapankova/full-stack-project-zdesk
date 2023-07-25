import { useContext } from "react"
import { UserContext } from '../context/userContext'
import { Outlet, Navigate } from "react-router-dom"

export function ProtectedLayout(props) {

    const { userData } = useContext(UserContext)

    if (userData._id) {
        return <Outlet />
    }

    return <Navigate to='/' />

}