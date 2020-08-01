import React, {Component,}from 'react';
import {searchGiphy, fetchGiphies} from '../actions/searchActions';
import { connect } from 'react-redux';


 class InputPage extends Component {

     
     render(){

        const handleChange = e => {
            this.props.searchGiphy(e.target.value);
            }
        const handleSubmit = e => {
            e.preventDefault();
            this.props.fetchGiphies(this.props.text);
        }

        
        return (
            
            <div className="w-64 m-auto mt-6">
                <form className="flex" onSubmit={handleSubmit}>
                    <input 
                    className="bg-white focus:outline-none focus:shadow-outline border border-blue-500 rounded-lg py-2 px-4 block appearance-none leading-normal" 
                    type="text" 
                    placeholder="Enter a search Query"
                    onChange={handleChange} 
                    /> 
                    <button className=" ml-4 p-2 rounded-lg text-bold text-white bg-blue-500">Go</button>
                </form>
            </div>
            
        )

    }
}
const mapStateToProps = state => ({
    text: state.giphy.text
})

export default connect(mapStateToProps, {searchGiphy,fetchGiphies})(InputPage);