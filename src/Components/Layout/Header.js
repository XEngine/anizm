import React from 'react'
import Menu from './Menu/Menu'
import Search from './Search/Search'
import Auth from './Auth/Auth'
import Logo from './Logo/Logo'
import {connect} from 'react-redux'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const animeImage = this.props.anime.data ? {backgroundImage: `url(${process.env.CDN + this.props.anime.data.covers.original})`} : {};

        return (
            <div className="header-section" style={animeImage}>
                <Logo/>
                <Menu/>
                <Auth/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        anime: state.anime
    }
}

function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)