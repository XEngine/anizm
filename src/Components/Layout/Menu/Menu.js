import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => (
    <div className="header-menu">
        <ul>
            <li><NavLink to={'/anime/'}>Anime</NavLink></li>
            <li><NavLink to={'/cizgifilm/'}>Çizgi Film</NavLink></li>
            <li><NavLink to={'/topluluk/'}>Topluluk</NavLink></li>
        </ul>
    </div>

)
export default Menu