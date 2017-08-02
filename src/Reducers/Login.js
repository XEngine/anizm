import * as constants from '../constants'

const initialState = {
    data: null,
    isLoading: false,
    isLoggedIn: false,
    error: false
}

export default function userUpdate(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case constants.USER_LOGGING_IN:
            return {
                ...state,
                isLoading: true,
            }
        case constants.USER_LOGGED_IN:
            return {
                ...state,
                data: payload,
                isLoggedIn: true,
            }
        case constants.USER_FAILED_TO_LOGIN:
            return {
                ...state,
                error: payload
            }
        case constants.USER_LOGGED_OUT:
            return state
        default:
            return initialState
    }
}