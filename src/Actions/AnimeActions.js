import * as constants from '../constants'
import axios from 'axios'

export const animeAction = data => dispatch => {
    dispatch({
        type: constants.ANIME_FETCHING
    })
    return new Promise((resolve, reject) => {
        axios.get('api/anime/detail', {
            params : {slug : data}
        }).then(response => {
            dispatch({
                type: constants.ANIME_FETCHED,
                payload: response.data
            })
            resolve()
        }).catch((error) => {
            dispatch({
                type: constants.ANIME_FETCHING_FAILED,
                payload: error
            })
            reject()
        })
    })
}