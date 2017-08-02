import React from 'react'
import {Carousel} from 'antd';
import AnimeListCart from '../../../Components/Shared/AnimeListCart'
import uniqueId from 'lodash/uniqueId'

class LatestEpisodes extends React.Component {
    constructor(props) {
        super(props)

        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    next() {
        this.refs.slider.refs.slick.slickNext()
    }

    previous() {
        this.refs.slider.refs.slick.slickPrev()
    }

    render() {
        if (!this.props.episodes) {
            return false
        }
        const animes = (
            <Carousel ref="slider" dots={false} arrows={false}>
                {this.props.episodes.map(chunked => {
                    return (
                        <div key={uniqueId('chunk_')}>
                            <div className="tile">
                                {chunked.map(episode => {
                                    return (
                                        <AnimeListCart key={uniqueId('anime_')} episode={episode}/>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        )
        return (
            <div className="p-d-latest-episodes">
                <div className="extra">
                    <h3>Son Eklenen Bölümler</h3>
                    <div className="navigation-buttons">
                        <a onClick={this.previous}><i className="fa fa-arrow-circle-left"/></a>
                        <a onClick={this.next}><i className="fa fa-arrow-circle-right"/></a>
                    </div>
                </div>
                {animes}
            </div>
        )
    }
}


export default LatestEpisodes