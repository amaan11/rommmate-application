import { AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILED, SEND_EMAIL_RESPONSE, RESET_PASSWORD_RESPONSE, REGISTER_USER_SUCCESS } from '../actions/actionTypes'
import intialState from "../intialState"

export default function authReducer(state = intialState, action) {
    switch (action.type) {
        case AUTHENTICATE_USER_SUCCESS:
            return { ...state, user: action.res.user, token: action.res.token }
        case AUTHENTICATE_USER_FAILED:
            return { ...state, authError: action.res }
        case REGISTER_USER_SUCCESS:
            return { ...state, registerUser: action.res }
        case SEND_EMAIL_RESPONSE:
            return { ...state, emailResponse: action.res }
        case RESET_PASSWORD_RESPONSE:
            return { ...state, resetPasswordResponse: action.res }
        default:
            return { state }
    }
}
