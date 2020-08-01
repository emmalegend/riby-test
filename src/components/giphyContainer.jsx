import React, { Component } from 'react'
import {connect} from 'react-redux';
import GifCard from './gifCard';

export  class GiphyContainer extends Component {
    render() {
        const {giphy} = this.props;

        let content = '';
        content = giphy.length > 0 ? giphy.map((gif, index) => 
        //console.log(gif)
        <GifCard key={index} gif={gif}/>
        ) : null
        return (
            <div className="container flex flex-wrap">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    giphy: state.giphy.giphies
})
export default connect(mapStateToProps)(GiphyContainer)