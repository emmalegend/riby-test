import React, { Component } from 'react'
import InputPage from './inputPage';
import {connect} from 'react-redux';
import Loading from './loadingpage'
import GiphyContainer from './giphyContainer'

class landing extends Component {
    render() {
       const {loading} = this.props;
        return (
            <div>
                <InputPage />
                {loading? <Loading /> : <GiphyContainer />}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading:state.giphy.loading
})
export default connect(mapStateToProps)(landing);