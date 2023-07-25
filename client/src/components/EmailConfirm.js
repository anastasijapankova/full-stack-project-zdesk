import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export function EmailConfirm(props) {

    const { token } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        async function sendData() {
            const response = await axios.post('/user/email-confirm', { token })
            console.log(response)

            if (response.data.success) {
                setTimeout(() => navigate('/'), 3000)
            } else {
                alert('Not valid token')
            }
        }
        sendData()
    }, [])

    return (
        <div>
            {/* <p>Thank you for verificing your email </p>
            <p>Your token is {token}</p> */}
            <p>Thank you for visiting </p>
            <p>We are veritying your email </p>
            <p>Once it's ready you will be redirected to the login page </p>
            <p>Your token is {token}</p>
        </div>
    )
}