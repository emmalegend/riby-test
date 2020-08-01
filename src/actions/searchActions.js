import {SEARCH_GIPHY} from'./types';
import {FETCH_GIPHY} from'./types';
import {FETCH_GIF} from'./types';
import axios from 'axios';

const API_Key = "g40LDWMlikylEnW0q6xkzjPKCHBHsQga";
//dispatching action type or payload
export const searchGiphy = text => dispatch => {
    dispatch({
        type:SEARCH_GIPHY,
        payload: text 
    })
}

export const fetchGiphies = text => dispatch => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API_Key}&q=${text}&limit=25&offset=0&rating=g&lang=en`)
    .then(response => 
        dispatch({
        type:FETCH_GIPHY,
        payload:response.data.data
    })
    )
.catch(err => console.log(err))
}

export const fetchGif = id => dispatch => {
    axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=${API_Key}`)
    .then(response => 
        //console.log(response.data.data)
        dispatch({
        type:FETCH_GIF,
        payload:response.data.data
    })
    )
.catch(err => console.log(err))
}