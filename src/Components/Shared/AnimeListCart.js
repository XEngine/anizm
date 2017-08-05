import React from 'react'
import {Rate,Badge} from 'antd';

const AnimeListCart = (props) => {
    const episode = props.episode
    return (
        <div itemScope={true} itemType="http://schema.org/TVSeries" className="tile-wrapper">
            <a itemProp="url" href="#">
                <div className="anime-poster">
                    <img itemProp="image" className="img-fluid rounded" src={`${process.env.CDN}${episode.anime.posters.small}`} />
                </div>
                <div className="anime-title">
                    <span itemProp="name">{episode.anime.canonical_title}</span>
                </div>
                <div className="anime-episode-title"
                     itemProp="episode"
                     itemScope={true}
                     itemType="http://schema.org/TVEpisode">
                    <span itemProp="position" className="badge badge-danger" >{episode.canonical_title ? episode.episode : 'Bölüm ' + episode.episode}</span>
                    <span itemProp="name">{episode.canonical_title}</span>
                </div>
                <div className="anime-reviews">
                    <Rate disabled defaultValue={4}/> (43 Yorum)
                </div>
            </a>
        </div>
    )
}
export default AnimeListCart