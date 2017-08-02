import * as constants from '../constants'

const initialState = {
    data: null,
    isLoading: false,
    error: {},
    fetched: false
}

export default function animeReducer(state = initialState, {
    type,
    payload
}) {
    switch (type) {
        case constants.ANIME_FETCHING:
            return Object.assign({}, initialState, {
                isLoading: true,
            })
        case constants.ANIME_FETCHED:
            return Object.assign({}, initialState, {
                fetched: true,
                data: payload,
                isLoading: false,
                error: {}
            })
        case constants.ANIME_FETCHING_FAILED:
            return Object.assign({}, initialState, {
                error: payload
            })
        default:
            return initialState
    }
}