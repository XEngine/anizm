import React from 'react'
import moment from 'moment'
import {Rate, Button} from 'antd'
import {Link} from "react-router-dom";

function truncate(str, limit) {
    return (str.length < limit) ? str : str.substring(0, limit) + '...';
}

class SimpleAnimeCart extends React.Component {
    render() {
        if (!this.props.anime)
            return false

        const {anime} = this.props
        const extra = (
            <div className="extra">
                <div className="boxes">
                    <div className="box">
                        <span className="head">{anime.average_rating}</span>
                        <span className="desc">Puan</span>
                    </div>
                    <div className="box">
                        <span className="head">{anime.episode_count}</span>
                        <span className="desc">Bölüm</span>
                    </div>
                </div>
                <div className="operation">
                    <Button><i className="fa fa-plus"/> FAVORİLERE EKLE </Button>
                </div>
            </div>
        )
        const trailerButton = (
            <div className="trailer-button">
                <Button><i className="fa fa-youtube-play"/> FRAGMAN </Button>
            </div>
        )
        return (
            <div className="p-sh-simple-anime-cart">
                <div className="anime-information">
                    <div className="thumbnail">
                        <img src={CDN + anime.posters.tiny}/>
                    </div>
                    <div className="information">
                        <div className="title">
                            <Link to={`/anime/${anime.slug}`}>{anime.canonical_title}</Link>
                        </div>
                        <div className="star-rating">
                            <Rate disabled defaultValue={4}/>
                        </div>
                        <div className="extra-information">
                            <div className="airdate">
                                <span className="head">Çıkış Tarihi : </span>
                                <span className="desc">{moment(anime.start_date).format('LL')}</span>
                            </div>
                            <div className="synopsis">
                                <span className="head">Özet : </span>
                                <span className="desc">{truncate(anime.synopsis, 152)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.extra ? extra : null}
                {this.props.trailer ? trailerButton : null}
            </div>
        )
    }
}

export default SimpleAnimeCart