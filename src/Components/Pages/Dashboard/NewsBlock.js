import React from 'react'

const demo = [
    {
        title: "Animasyonlar çok kötü",
        featuredImage: "https://s-media-cache-ak0.pinimg.com/originals/14/bd/99/14bd99918b051b4155d0aff8d0ca7fe0.jpg",
    },
    {
        title: "Baruto : Saçmalık!",
        featuredImage: "http://2.bp.blogspot.com/-eQPkwVZWLBs/UvCmCosd1eI/AAAAAAAADN4/_xLTLPwCWeM/s0/kill-la-kill-matoi-ryuuko-hd-wallpaper-1920x1200-j.jpg",
    },
    {
        title: "Drifters : Underated anime!",
        featuredImage: "https://c2.staticflickr.com/6/5786/30169706784_3469674775_b.jpg",
    },
    {
        title: "Samurai Jack : Kaybolan Kılıç",
        featuredImage: "http://www.adultswim.com/misc/samurai-jack-backgrounds/media/SAMURAI_JACK_1920X1080_Skulls.png",
    }
]

export default class NewsBlock extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            news: []
        }
    }

    render() {
        return (
            <div className="p-d-news-wrapper">
                <div className="tile tile--two tile--big">
                    <div className="tile__col">
                        <div className="tile__item" style={{backgroundImage : `url(${demo[0].featuredImage})`}}>
                            <div className="tile__item-inner">
                                <h2 className="tile__item-title">{demo[0].title}</h2>
                                <p className="tile__item-desc">{demo[0].message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="tile__col">
                        <div className="tile__item" style={{backgroundImage : `url(${demo[1].featuredImage})`}}>
                            <div className="tile__item-inner">
                                <h2 className="tile__item-title">{demo[1].title}</h2>
                                <p className="tile__item-desc">{demo[1].message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile tile--two tile--mid">
                    <div className="tile__col">
                        <div className="tile__menu">
                            <div className="tile__menu-item">
                                En Popüler Animeler
                            </div>
                            <div className="tile__menu-item">
                                En Popüler Animeler
                            </div>
                            <div className="tile__menu-item">
                                En Popüler Animeler
                            </div>
                            <div className="tile__menu-item">
                                En Popüler Animeler
                            </div>
                            <div className="tile__menu-item">
                                En Popüler Animeler
                            </div>
                            <div className="tile__menu-item">
                                En Popüler Animeler
                            </div>
                        </div>
                    </div>
                    <div className="tile__col">
                        <div className="tile__item" style={{backgroundImage : `url(${demo[2].featuredImage})`}}>
                            <div className="tile__item-inner">
                                <h2 className="tile__item-title">{demo[2].title}</h2>
                                <p className="tile__item-desc">{demo[2].message}</p>
                            </div>
                        </div>
                        <div className="tile__item" style={{backgroundImage : `url(${demo[3].featuredImage})`}}>
                            <div className="tile__item-inner">
                                <h2 className="tile__item-title">{demo[3].title}</h2>
                                <p className="tile__item-desc">{demo[3].message}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}