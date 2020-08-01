import {SEARCH_GIPHY,FETCH_GIPHY,FETCH_GIF} from '../actions/types';

const initalState = {
    text : '',
    giphies : [],
    loading : false,
    gif : []
}

export default function (state =initalState, action){
    switch(action.type){
        case SEARCH_GIPHY :
            return{
                ...state,
                text:action.payload,
                loading:false
            }
        case FETCH_GIPHY :
                return{
                ...state,
                giphies:action.payload,
                }
        case FETCH_GIF :
                return{
                    ...state,
                gif:action.payload,
                }
        default:
            return state
    }
}