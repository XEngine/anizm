import React from 'react'
import {Route, Switch} from 'react-router-dom'

import store from '../store'
import {loginUserSuccess} from '../Actions/LoginActions'
import axios from 'axios'
import Auth from '../Util/Auth';

import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'

import Dashboard from '../Containers/Dashboard'
import Anime from '../Containers/Anime'
import NotFound from '../Containers/NotFound'

axios.defaults.baseURL = process.env.API_URL
axios.defaults.headers = {
    "Accept": 'application/json',
    "Content-Type": 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
}

if (Auth.isAuthenticated()) {
    axios.defaults.headers = {
        Authorization: 'Bearer ' + Auth.getToken()
    }
    store.dispatch(loginUserSuccess(Auth.getUser()))
}

const Routes = () => (
    <div className="anizm-container">
        <Header/>
        <div className="container header-padding">
            <Switch key={location.key} location={location}>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/anime/:slug" component={Anime}/>
            </Switch>
            <Footer/>
        </div>
    </div>
)

export default Routes