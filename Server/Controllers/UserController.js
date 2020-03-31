import express from "express";
import nodemailer from "nodemailer";
import { check, validationResult } from "express-validator";
import {
    login,
    registerUser,
    emailAlreadyExist,
    updateUser,
    checkResetCode,
    storeResetCode
} from "../Models/User";

const router = express.Router();

// Here we are configuring our SMTP Server details.

let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "asalheen1997@gmail.com",
        pass: "dxsnempsqbyiymgt"
    }
});

router.get("/login", async (req, res, next) => {
    try {
        const { email, password } = req.query;
        if (!email || !password) {
            return res.status(500).json({ error: { message: 'Invalid Inputs', data: '' } })
        }
        const response = await login(email, password);
        if (!response["isSuccess"]) {
            return res.status(500).json({ error: { message: response.error.message, data: '' } })
        }
        return res.status(200).json({ data: response.data, message: 'Login Successful!' })

    } catch (error) {
        next(error);
    }
});

router.post(
    "/register-user",
    [
        check("email", "Invalid Email").isEmail(),
        check("password", "Password must be atleast 8 characters").isLength({
            min: 8
        })
    ],
    async (req, res, next) => {
        try {
            let response = {};
            const { email, password } = req.body;
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json({ error: { data: errors.errors, message: 'Invalid Inputs' } });
            }
            const isEmailExist = await emailAlreadyExist(email);

            if (isEmailExist) {
                return res.status(400).json({ error: { message: 'Email Already Exist!You can login  directly!' } })
            } else {
                response = await registerUser(email, password);
                if (!response.isSuccess) {
                    return res.status(500).json({ error: { message: 'Something went wrong!' } })
                }
                return res.status(200).json({ data: { token: response.token, message: 'Account Created Successfully!' }, error: '' })
            }
        } catch (error) {
            next(error);
        }
    }
);

router.post("/forget-password", async (req, res, next) => {
    try {
        const { email } = req.query;
        const emailExist = await emailAlreadyExist(email);
        if (!email || !emailExist) {
            return res.status(400).json({ error: { message: 'Please enter a registered email!', data: '' } });
        } else {
            const resetCode = Math.random().toString(36).replace('0.', '').substring(0, 8)
            let mailOptions = {
                to: email,
                subject: "Reset your Email account",
                html:
                    `<br><h2>To Reset Your Password,Use this Reset Code.</h2><br><h3>
                    Reset Code :  ${resetCode}
                    </h3>`
            };

            await smtpTransport.sendMail(mailOptions, async function (error, data) {
                if (error) {
                    return res.status(500).json({ error: { message: 'Something Went Wrong!Try Again!' } });
                } else {
                    let response = await storeResetCode(resetCode, email)
                    if (!response) {
                        return res.status(500).json({ error: { message: 'Something Went Wrong!Try Again' } });
                    }
                    return res.status(200).json({ data: { message: 'Please Check your Email Address! Reset code has been sent!' } });
                }
            });
        }
    } catch (error) {
        next(error);
    }
});
router.put(
    "/reset-password", async (req, res, next) => {
        try {
            const { password, confirmPassword, email } = req.body;
            const { resetCode } = req.query
            const isvalidResetCode = await checkResetCode(resetCode, email)
            if (!isvalidResetCode) {
                return res.status(400).json({ error: { message: 'Please enter a valid reset Code!', data: '' } })
            }
            else
                if (!password || !confirmPassword || password.length <= 8 || password !== confirmPassword) {
                    return res.status(400).json({ error: { message: 'Invalid inputs', data: '' } })
                }
                else {
                    let response = await updateUser(email, password)
                    if (!response.isSuccess) {
                        return res.status(500).json({ error: { message: response.message, data: '' } })
                    }
                    return res.status(200).json({ data: { message: response.message }, error: '' })
                }

        } catch (error) {
            next(error);
        }
    }
);



export default router;

