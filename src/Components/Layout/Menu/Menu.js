import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => (
    <div className="header-menu">
        <span><NavLink to={'/'}>Anasayfa</NavLink></span>
        <span><NavLink to={'/anime/'}>Anime</NavLink></span>
        <span><NavLink to={'/cizgifilm/'}>Çizgi Film</NavLink></span>
        <span><NavLink to={'/topluluk/'}>Topluluk</NavLink></span>
        <span><NavLink to={'/tavsiye-robotu/'}>Tavsiye Robotu</NavLink></span>
        <span><NavLink to={'/hakkimizda/'}>Hakkımızda</NavLink></span>
    </div>
)

export default Menu