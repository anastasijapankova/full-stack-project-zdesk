import User from "../model/User.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import sendEmail from '../utils/sendEmail.js'

export const handleSignUp = async (req, res) => {
    console.log("handleSignUp:", req.body);

    try {
        const { fullName, email, password } = req.body;

        if (!email || !password || !fullName) return res.send({ success: false, errorID: 1 })

        const salt = await bcrypt.genSalt(10)
        console.log("salt", salt)

        const hashedPassword = await bcrypt.hash(password, salt)
        console.log("hashedPassword", hashedPassword)

        req.body.password = hashedPassword;
        console.log(req.body)

        const newUser = await User.create(req.body);
        console.log("handleSignUp:", newUser);

        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_TOKEN, { expiresIn: '1d' })
        console.log("token:", token)
        sendEmail(token)

        res.status(200).send({ success: true });
    } catch (error) {
        console.log("Error signing up a new user:", error.message);
        res.status(500).send({ success: false, message: error.message });
    }
};

export const handleLogin = async (req, res) => {
    console.log("handleLogin:", req.body);

    try {
        const { email, password } = req.body
        if (!email || !password) return res.send({ success: false, errorID: 1 })


        const userLogin = await User.findOne({ email });
        if (!userLogin) res.send({ success: false, errorID: 2 })

        const isMatch = await bcrypt.compare(password, userLogin.password)
        if (!isMatch) return res.send({ success: false, errorID: 2 })

        console.log(userLogin)

        const newUser = userLogin.toObject()
        delete newUser.password

        console.log(newUser)

        // jwt.sign(payload, secretOrPrivateKey, [options, callback])
        const token = jwt.sign({ _id: userLogin._id }, process.env.JWT_TOKEN, { expiresIn: '1h' })
        console.log(token)

        res.cookie("login", token)

        res.send({ success: true, user: newUser });
    } catch (error) {
        console.log("Error while logging in:", error.message);
        res.send({ success: false, message: error.message });
    };
}

export const handleUpdate = async (req, res) => {

    try {
        const updatedProfile = await User.findByIdAndUpdate(req.body._id, req.body, { new: true })
        console.log(updatedProfile)
        res.send("User edited")
    } catch (error) {
        console.log(error.message)
        res.send(error.message)
    }

}

export const handleLogout = async (req, res) => {


    try {
        res.clearCookie('login')
        res.send("success logout");
    } catch (error) {
        console.log("Error while logging out:", error.message);
        res.send(" Error while logging out:");
    };
}

export const handleConfirm = async (req, res) => {
    console.log("handleConfirm", req.body)

    try {

        const decodedToken = jwt.verify(req.body.token, process.env.JWT_TOKEN)
        console.log(decodedToken)

        const user = await User.findByIdAndUpdate(decodedToken._id, { emailVerified: true }, { new: true })
        console.log(user)

        if (!user) return res.send({ success: false, errorID: 1 })

        // res.send("email confirmed");
        res.send({ success: true });
    } catch (error) {
        console.log("Error while logging out:", error.message);
        res.send(" Error while logging out:");
    };
}

export const handleForgotPassword = async (req, res) => {
    console.log("handleForgotPassword", req.body)

    try {
        const { email } = req.body;

        if (!email) return res.send({ success: false, errorId: 0 })

        const user = await User.findOne({ email: email })
        console.log(user)

        if (!user) return res.send({ success: false, errorId: 1 })

        const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, { expiresIn: '1d' })
        console.log(token)

        sendEmail(token, 'forgot-password')

        res.send({ success: true });
    } catch (error) {
        console.log("Error while on Forgot Password page:", error.message);
        res.send(" Error while on Forgot Password page:");
    };
}

export const handleNewPassword = async (req, res) => {
    console.log("handleNewPassword", req.body)

    try {

        const { token, password } = req.body;

        if (!token || !password) return res.send({ success: false, errorId: 0 })

        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN)
        console.log(decodedToken)

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.findByIdAndUpdate(decodedToken._id, { password: hashedPassword }, { new: true })
        console.log(user)

        if (!user) return res.send({ success: false, errorId: 1 })

        res.send({ success: true });
    } catch (error) {
        console.log("Error while on Forgot Password page:", error.message);
        res.send(" Error while on Forgot Password page:");
    };
}






// export const handleUpdateProfile = async (req, res) => {
//   console.log("🚀 ~ handleUpdateProfile:", req.body);
//   console.log("🚀 ~ handleUpdateProfile FILE:", req.file);

//   try {
//     console.log("🚀 ~ handleUpdateProfile FILENAME:", req.file.filename);

//     req.body.image = req.file.filename;

//     const editedUser = await User.findByIdAndUpdate(req.body.id, req.body, {
//       new: true,
//     });
//     console.log("🚀 ~ editedUser:", editedUser);

//     res.send("User Inserted into db");
//   } catch (error) {
//     console.log("🚀 ~ error handleUpdateProfile:", error.message);

//     res.send("Error in handleUpdateProfile" + error.message);
//   }
// };
