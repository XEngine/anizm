import {combineReducers} from 'redux'
import LoginReducer from './Login'
import RegisterReducer from './Register'
import Dashboard from './Dashboard'
import Anime from './Anime'

const rootReducer = combineReducers({
    login: LoginReducer,
    register : RegisterReducer,
    dashboard : Dashboard,
    anime : Anime
})

export default rootReducer