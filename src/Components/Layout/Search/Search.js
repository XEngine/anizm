import React from 'react'
import SearchOverlay from './SearchOverlay'
import {Icon,Button} from 'antd'

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            overlay: false
        }
    }

    render() {
        return (
            <div className="header-search">
                <Button className="search-trigger" onClick={() => {this.setState({overlay: true})}}>
                    <span>FAVORİ ANİMENİ BUL</span>
                    <Icon type="search" />
                </Button>
                {this.state.overlay ? <SearchOverlay hideOverlay={this.hideOverlay.bind(this)}/> : null}
            </div>
        )
    }

    hideOverlay(event) {
        this.setState({
            overlay: false
        })
    }
}