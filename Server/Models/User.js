import { Sequelize, QueryTypes } from "sequelize";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import moment, { utc } from 'moment'
import { secret, sequelize } from "../utils/config";

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "Email address already in use!"
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login_type: {
        type: Sequelize.ENUM,
        values: ['email_login', 'fingerprint_login'],
    },
    access_token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    reset_password_token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    reset_password_expires: {
        type: Sequelize.DATE,
        allowNull: true
    }
}, {
        indexes: [
            {
                unique: true,
                fields: ['email']
            }
        ]
    });

const generateHash = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
const validPassword = (password, dbPassword) => {
    return bcrypt.compare(password, dbPassword);
};


const login = async (email, password) => {
    let response = {};
    const user = await User.findOne({
        where: {
            email: email
        }
    });
    if (!user) {
        response["isSuccess"] = false
        response["error"] = { message: 'Invalid email ! Try Again!' };

    } else {
        /// expiry 
        await validPassword(password, user.password)
            .then(res => {
                if (res) {
                    const token = jwt.sign({
                        email: user.email,
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    }, secret);
                    user.access_token = token
                    user.save()
                    response['data'] = { token: token, user: user }
                    response["isSuccess"] = true
                } else {
                    response["isSuccess"] = false
                    response["error"] = { message: 'Invalid password!Try Again!' };
                }
            })
            .catch(error => {
                throw new Error(error);
            });
    }
    return response;
};

const registerUser = async (email, password, loginType) => {
    let response = {};
    await User.create({
        email: email,
        password: generateHash(password),
        login_type: loginType,
    })
        .then(res => {
            if (res) {
                const token = jwt.sign({
                    email: user.email,
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                }, secret);
                res.access_token = token
                res.save()
                response['token'] = token
                response["isSuccess"] = true
            }
            else {
                response["isSuccess"] = false
            }
        })
        .catch(error => {
            throw new Error(error);
        });
    return response;
};
const emailAlreadyExist = async email => {
    let isvalidEmail = false;
    await User.findOne({
        where: {
            email: email
        }
    })
        .then(res => {
            if (res) {
                isvalidEmail = true;
            }
        })
        .catch(error => {
            throw new Error(error);
        });
    return isvalidEmail;
};
const updateUser = async (email, newPassword) => {
    let response = {};
    await User.findOne({
        where: {
            email: email
        }
    })
        .then(res => {
            if (!res) {
                response['isSuccess'] = false
                response["message"] = "No User Found!!";
            } else {
                res.password = generateHash(newPassword);
                res.save();
                response['isSuccess'] = true
                response["message"] = "Reset Password Successful!!";
            }
        })
        .catch(error => {
            throw new Error(error);
        });
    return response;
};

const getUserIdByEmail = async email => {
    let userId = null;
    if (email) {
        await User.findOne({
            where: {
                email: email
            }
        }).then(response => {
            if (response) {
                userId = response.id;
            }
        });
    }
    return userId;
};
const checkResetCode = async (resetCode, email) => {
    let isValid = false
    const users = await sequelize.query('SELECT * FROM users WHERE email = ? AND reset_password_token = ? AND reset_password_expires > ?', {
        replacements: [email, resetCode, moment().utc().format("YYYY-MM-DD HH:mm:ss")],
        type: QueryTypes.SELECT

    })
    if (users && users.length > 0) {
        isValid = true
    }
    return isValid
}
const storeResetCode = async (resetCode, email) => {
    await User.findOne({
        where: {
            email: email
        }
    })
        .then(res => {
            if (!res) {
                return false;
            }
            else {
                res.reset_password_token = resetCode
                res.reset_password_expires = moment().add(20, 'minutes')
                res.save()
            }
        })
    return true
}
export {
    User,
    login,
    registerUser,
    emailAlreadyExist,
    updateUser,
    getUserIdByEmail,
    checkResetCode,
    storeResetCode
};
