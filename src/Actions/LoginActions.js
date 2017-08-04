import * as constants from '../constants'
import config from '../config'
import Auth from '../Util/Auth'
import axios from 'axios'

export function loginUserRequest() {
    return {
        type: constants.USER_LOGGING_IN
    }
}

export function loginUserSuccess(data) {
    return {
        type: constants.USER_LOGGED_IN,
        payload: data
    }
}

export function loginUserFailure(error) {
    Auth.destroyToken()
    return {
        type: constants.USER_FAILED_TO_LOGIN
    }
}

export function logout() {
    Auth.destroyToken()
    return {
        type: constants.USER_LOGGED_OUT
    }
}

export const login = data => dispatch => {
    dispatch(loginUserRequest())
    return new Promise((resolve, reject) => {
        axios('oauth/token', {
            method: 'post',
            data: {
                grant_type: 'password',
                client_id : process.env.JWT.client_id,
                client_secret : process.env.JWT.client_secret,
                username : data.username,
                password: data.password
            }
        }).then(response => {
            console.log(response)
            Auth.setToken(response.data.access_token,response.data.expires_in)
            axios('api/user', {
                method: 'GET'
            }).then(user => {
                Auth.setUser(user.data)
                dispatch(loginUserSuccess(user.data))
                resolve()
            })
        }).catch(error => {
            dispatch(loginUserFailure(error))
            reject()
        })
    })
}

