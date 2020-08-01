import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class GifCard extends Component {
    render() {
        const {gif} = this.props;
        
        return (
            <div className="flex flex-wrap flex-col m-2">
                <Link to={'/gif/' + gif.id}>
                    <img src={gif.images.fixed_height.url} alt=""/>
                </Link>
                <p>{gif.title}</p>
            </div>
        );
    }
}

export default GifCard;
