import React, { Component } from 'react'
import {connect} from 'react-redux'

import {fetchGif} from '../actions/searchActions'

class SingleGif extends Component {
    componentDidMount(){
        this.props.fetchGif(this.props.match.params.id )
    }
    render() {
        const {gif} = this.props
        return (
            <div className="flex flex-col">
                <img src={gif.images} alt="" className="font-bold "/>
                <a href={gif.source} className="font-bold mt-2">Click to see the source of the Gif</a>
                <p> <span className="font-bold mt-2">Gotten from:</span> {gif.source_tld}</p>
            </div>
        )
    }
}

const mapStateToProps = state =>( {
    loading: state.giphy.loading,
    gif: state.giphy.gif   
})

export default connect(mapStateToProps, {fetchGif})(SingleGif)