import React from 'react'
import {Icon} from 'antd'
import debounce from 'lodash/debounce'
import axios from 'axios'
import SimpleAnimeCart from '../../Shared/SimpleAnimeCart'

export default class SearchOverlay extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: []
        }
        this.handleClose = this.handleClose.bind(this)
        this.handleSearch = debounce(this.handleSearch, 350);
    }

    render() {
        return (
            <div className="search-overlay">
                <div className="search">
                    <Icon className="search-icon" type="search"/>
                    <input placeholder="Arama..." onChange={(e) => {
                        this.handleSearch(e.target.value)
                    }} ref="search" className="search-input"
                           autoComplete={false}
                           spellCheck={false}/>
                </div>
                <div className="result-set">
                    {this.state.result.map(anime => {
                        return (
                            <SimpleAnimeCart anime={anime} extra={false} trailer={true} />
                        )
                    })}
                </div>
            </div>
        )
    }

    handleClose(event) {
        if (event.keyCode === 27) {
            this.props.hideOverlay()
        }
    }

    handleSearch(value) {
        axios('/anime/search', {
            method: 'get',
            params: {query: value}
        }).then(response => {
            this.setState({
                result: response.data
            })
        })
    }

    componentWillMount() {
        document.addEventListener("keydown", this.handleClose);
    }

    componentDidMount() {
        this.refs.search.focus()
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleClose);
    }
}