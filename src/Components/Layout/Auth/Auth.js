import React from 'react'
import { Avatar, Badge } from 'antd';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {login} from '../../../Actions/LoginActions'
import {register} from '../../../Actions/RegisterActions'

import Login from './Login'
import Register from './Register'
import AuthUtil from '../../../Util/Auth'

class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render() {
        const login = () => {
            return (
                <div>
                    <Login />
                    <span> ya da </span>
                    <Register />
                </div>
            )
        }

        const loggedin = () => {
            return (
                <div>
                    <Badge dot><Avatar shape="square" icon="user" >{this.props.login.data.name}</Avatar></Badge>
                </div>
            )
        }
        return (
            <div className="header-auth">
                {!this.props.login.isLoggedIn ? login() : loggedin() }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {login: state.login, register: state.register}
}

export default connect(mapStateToProps)(Auth)