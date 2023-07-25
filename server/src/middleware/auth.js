import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export function Auth(req, res, next) {
    console.log("auth middleware here")
    console.log("auth middleware here", req.cookies)

    try {

        const token = req.cookies.login
        console.log(token)
        if (!token) return res.send({ success: false, errorId: 400 })

        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN)
        console.log(decodedToken)

        if (!decodedToken._id) return res.send({ success: false, errorId: 9 })

        req.user = decodedToken._id

        next();

    } catch {
        console.log("error", error.message)
        res.send({ success: false, errorId: error.message })
    }

}