import jwt from "jsonwebtoken";
import { secret } from "../utils/config";
import { getUserIdByEmail } from "../Models/User"

const authenticateToken = (req, res, next) => {
    if (req.path == '/login' || req.path == '/register' || req.path == '/forget-password' ||
        req.path == '/reset-password/:resetCode') {
        next()
    }
    else {
        let token = req.headers["authorization"] || req.headers["x-access-token"];

        if (!token || !token.startsWith("Bearer")) {
            return res.status(401).json({
                isSuccess: false,
                data: "Authentication Failure!!"
            });
        }
        token = token.slice(7, token.length);

        jwt.verify(token, secret, async (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    isSuccess: false,
                    message: "Authentication Failure"
                });
            } else {
                const userId = await getUserIdByEmail(decoded);
                req.body.userId = userId;
                next();
            }
        });
    }
};

export default authenticateToken;
