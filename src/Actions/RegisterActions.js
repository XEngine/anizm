import * as constants from '../constants'
import axios from 'axios'

export function registering() {
    return {
        type: constants.USER_REGISTERING
    }
}

export function registered(data) {
    //login edelim kardeşimizi.
    console.log(data)
}

export function registerFailed(error) {
    return {
        type: constants.USER_FAILED_TO_REGISTER,
        payload : error
    }
}

export const register = data => dispatch => {
    dispatch(registering())
    return new Promise((resolve, reject) => {
        axios('api/user', {
            method: 'post',
            data: data
        }).then(response => {
            dispatch(registered(response))
            resolve()
        }).catch((error) => {
            dispatch(registerFailed(error.response.data))
            reject()
        })
    })
}