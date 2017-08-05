import * as constants from '../constants'
import axios from 'axios'

export const dashboard = () => dispatch => {
    dispatch({
        type: constants.DASHBOARD_FETCHING
    })
    return new Promise((resolve, reject) => {
        axios('/anime/dashboard', {
            method: 'get'
        }).then(response => {
            dispatch({
                type: constants.DASHBOARD_FETCHED,
                payload: response.data
            })
            resolve()
        }).catch((error) => {
            dispatch({
                type: constants.DASHBOARD_FETCHING_FAILED,
                payload: error
            })
            reject()
        })
    })
}