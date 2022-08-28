import {ADD_MOVIE} from "../../constants/constans";

export const addMovieReview = (review) => {
    return {
        type: ADD_MOVIE,
        payload: review
    }
}