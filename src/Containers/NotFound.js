import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class NotFound extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
             Pi
            </div>
        )
    }

    componentDidMount() {

    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)