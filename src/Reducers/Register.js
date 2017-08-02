import * as constants from '../constants'

const initialState = {
    data: null,
    isLoading: false,
    error: {}
}

export default function registerReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case constants.USER_REGISTERING:
            return {
                ...initialState,
                isLoading: true,
            }
        case constants.USER_REGISTERED:
            return {
                ...initialState,
                data: payload
            }
        case constants.USER_FAILED_TO_REGISTER:
            return {
                ...initialState,
                error: payload
            }
        default:
            return initialState
    }
}