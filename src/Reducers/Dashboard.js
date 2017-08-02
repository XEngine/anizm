import * as constants from '../constants'

const initialState = {
    data: null,
    isLoading: false,
    error: {},
    fetched: false
}

export default function episodeReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case constants.DASHBOARD_FETCHING:
            return {
                ...state,
                isLoading: true,
            }
        case constants.DASHBOARD_FETCHED:
            return {
                ...state,
                fetched: true,
                data: payload
            }
        case constants.DASHBOARD_FETCHING_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return state
    }
}