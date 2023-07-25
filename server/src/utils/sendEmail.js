import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
});

// async..await is not allowed in global scope, must use a wrapper
export default async function main(token, type = 'registration') {

    let email = {}

    switch (type) {
        case 'regisration':
            email = {
                from: '"Anastasija Pankova DEV" <anastasija.pankova@yahoo.com>', // sender address
                to: "ms.pankova.anastasija@gmail.com", // list of receivers
                subject: "Verify your email", // Subject line
                text: "Hello world! This is the plain text part", // plain text body
                html: `<b>Welcome to our social app</b>
    <p>click <a href="http://localhost:3000/email-confirm/${token}">here</a> to verify your email</p>
  `, // html body
            }
            break;

        case 'forgot-password':
            email = {
                from: '"Anastasija Pankova DEV" <anastasija.pankova@yahoo.com>', // sender address
                to: "ms.pankova.anastasija@gmail.com", // list of receivers
                subject: "Instruction to change your password", // Subject line
                text: "Hello world! This is the plain text part", // plain text body
                html: `<b>Welcome to our social app</b>
    <p>click <a href="http://localhost:3000/create-new-password/${token}">here</a> to change your password</p>
  `, // html body
            }

            break;
        default:
            return null;


    }

    // send mail with defined transport object
    const info = await transporter.sendMail(email);

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    //
    // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
    //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
    //       <https://github.com/forwardemail/preview-email>
    //
}



