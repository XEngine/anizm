import React from 'react'
import SimpleAnimeCart from '../../Shared/SimpleAnimeCart'

class WeeklyAnime extends React.Component {
    render() {
        if (!this.props.anime)
            return false

        const {anime} = this.props

        return (
            <div className="p-d-weekly-anime">
                <h3>Haftanın Animesi</h3>
                <SimpleAnimeCart extra={true} anime={anime}/>
            </div>
        )
    }

}


export default WeeklyAnime