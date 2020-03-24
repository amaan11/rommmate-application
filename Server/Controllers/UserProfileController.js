import express from "express";
import { createProfile } from "../Models/UserProfile";
import { imageUpload } from "../utils/FileUpload";
import { twilioCredentials } from "../utils/config"
import { UserProfile } from "../Models/UserProfile";

const router = express.Router()
const { accountSid, authToken } = twilioCredentials;
const client = require('twilio')(accountSid, authToken);


router.post("/create-profile", async (req, res, next) => {
    try {
        const { fullName, gender, birthDate, phoneNumber, profession, workLocation, userInfo, profileImages } = req.body

        if (!fullName || !gender || !birthDate || !phoneNumber || !profession || !workLocation || !userInfo || profileImages.length == 0) {
            return res.status(400).json({ isSuccess: false, data: "Invalid Inputs" })
        }
        else {
            const response = await createProfile(req.body)
            if (!response['isSuccess']) {
                return res.status(500).json(response)
            }
            else {
                return res.status(200).json(response)

            }
        }
    }
    catch (error) {
        next(error)
    }
})
router.post("/upload-image", (req, res, next) => {
    imageUpload(req, res, function (err) {
        if (err) {
            return res.status(400).json({ isSuccess: false, data: 'Upload Failed!Try again' })
        }
        else {
            return res.status(200).json({ isSuccess: true })
        }
    })
})
router.post('/send-otp?phoneNumber', (req, res, next) => {
    const { currentNumber } = twilioCredentials;
    const { phoneNumber } = req.params
    const { userId } = req.body
    let otp = Math.floor(1000 + Math.random() * 9000)

    client.messages
        .create({
            body: `OTP for verfication:${otp}`,
            from: currentNumber,
            to: phoneNumber,
        })
        .then(message => {
            if (message && message.sid) {
                const user = UserProfile.findOne({ where: { user_id: userId } })
                user.otp = otp
                user.save()
                return res.status(200).json({ isSuccess: true, data: 'Message Sent Sucessfully' })
            } else {
                return res.status(500).json({ isSuccess: false, data: 'Unable to send message!Please try Again!' })
            }
        })
        .catch(error => {
            return res.status('500').json({ isSuccess: false, message: error });
        });
})
router.get('/verify-otp')
export default router;
