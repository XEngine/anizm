import axios from 'axios'

export default class Auth {
    static setToken(token, expiration) {
        axios.defaults.headers = {
            Authorization: 'Bearer ' + token
        }
        localStorage.setItem('token', token)
        localStorage.setItem('expiration', expiration + Date.now())
    }

    static setUser(user){
        localStorage.setItem('user', JSON.stringify(user))
    }

    static getToken() {
        const token = localStorage.getItem('token')
        const expiration = localStorage.getItem('expiration')
        if (!token || !expiration) {
            return false
        }

        if (Date.now() > parseInt(expiration)) {
            Auth.destroyToken()
            return false
        } else {
            return token
        }
    }

    static getUser() {
        const user = localStorage.getItem('user')
        if(user) {
            return JSON.parse(user)
        }
    }

    static destroyToken() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('user');
    }

    static isAuthenticated() {
        return !!Auth.getToken();
    }
}