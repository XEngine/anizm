import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {dashboard} from '../Actions/DashboardActions'

import NewsBlock from "../Components/Pages/Dashboard/NewsBlock"
import LatestEpisodes from "../Components/Pages/Dashboard/LatestEpisodes"
import WeeklyAnime from '../Components/Pages/Dashboard/WeeklyAnime'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NewsBlock />
                <div className="one_column_wrapper">
                    <LatestEpisodes episodes={this.props.dashboard.fetched ? this.props.dashboard.data.episodes : false}/>
                </div>
                <div className="two_column_wrapper">
                    <div className="left_panel">
                    </div>
                    <div className="right_panel">
                        <WeeklyAnime
                            anime={this.props.dashboard.fetched ? this.props.dashboard.data.weeklyAnime : false}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getDashboard()
    }
}

function mapStateToProps(state) {
    return {
        dashboard: state.dashboard
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getDashboard: dashboard
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)