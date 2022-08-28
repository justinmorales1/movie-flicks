import React from 'react';
import {ADD_MOVIE} from "../../constants/constans";

const movieReviewsReducer = (state = [], action) => {
    switch (action.type){
        case ADD_MOVIE:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default movieReviewsReducer;