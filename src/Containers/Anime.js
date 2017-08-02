import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {animeAction} from '../Actions/AnimeActions'


class Anime extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if(!this.props.anime.fetched){
            return false
        }

        const anime = this.props.anime.data
        return (
            <div className="p-d-anime">
                <div className="cover-image" style={{backgroundImage : `url(//localhost:3000/serv${anime.covers.original}`}} />
                <h3>{anime.canonical_title}</h3>
            </div>
        )
    }

    componentDidMount() {
        this.props.getAnime(this.props.match.params.slug);
    }
}

function mapStateToProps(state) {
    return {
        anime : state.anime
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAnime: animeAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Anime)