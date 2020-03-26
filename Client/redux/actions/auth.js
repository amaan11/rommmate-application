import {
    API_URL, AUTHENTICATE_USER_SUCCESS,
    AUTHENTICATE_USER_FAILED,
    SEND_EMAIL_RESPONSE, RESET_PASSWORD_RESPONSE, REGISTER_USER_SUCCESS
} from './actionTypes'
import axios from 'axios';

export const authenticateUser = (data) => {
    return dispatch => {
        return axios.get(`${API_URL}/login`, {
            params: data
        })
            .then(response => {
                console.log("response>>", response)
                dispatch(authenticateUserSuccess(response.data))
            })
            .catch(error => {
                console.log("error>>", error)
                dispatch(authenticatUserFailed(error.response.data))
            })
    }
}
const authenticateUserSuccess = (res) => {
    return ({
        type: AUTHENTICATE_USER_SUCCESS,
        res
    })
}
const authenticatUserFailed = (res) => {
    return ({
        type: AUTHENTICATE_USER_FAILED,
        res
    })
}
export const registerUser = (data) => {
    return dispatch => {
        return axios.post(API_URL + 'register-user', data)
            .then(result => {
                dispatch(registerUserSuccess(result))
            })
    }
}
const registerUserSuccess = (res) => {
    return ({
        type: REGISTER_USER_SUCCESS,
        res
    })
}
export const sendEmailRequest = (data) => {
    const { email } = data
    return dispatch => {
        return axios.post(`${API_URL}/forget-password?email=${email}`)
            .then(response => {
                dispatch(sendEmailResponse(response.data))
            })
            .catch(error => {
                dispatch(sendEmailResponse(error.response.data))
            })
    }
}
const sendEmailResponse = (res) => {
    return ({
        type: SEND_EMAIL_RESPONSE,
        res
    })
}
export const resetPasswordRequest = (data) => {
    const resetCode = data.resetCode
    delete data.resetCode
    return dispatch => {
        return axios.post(API_URL + `reset - password / ${resetCode}`, data)
            .then(result => {
                dispatch(resetPasswordResponse(result))
            })
    }
}
const resetPasswordResponse = (res) => {
    return ({
        type: RESET_PASSWORD_RESPONSE,
        res
    })
}