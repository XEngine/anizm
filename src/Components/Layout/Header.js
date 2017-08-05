import React from 'react'
import Menu from './Menu/Menu'
import Search from './Search/Search'
import Auth from './Auth/Auth'
import Logo from './Logo/Logo'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header-section">
                <Logo/>
                <Menu/>
                <Auth/>
            </div>
        )
    }
}