import {SEARCH_MOVIES, SELECTED_MOVIE} from "../../constants/constans";


export const searchMovies = (movies) => {
    return {
        type: SEARCH_MOVIES,
        payload: movies
    }
}

export const selectedMovie = (movie) => {
    return {
        type: SELECTED_MOVIE,
        payload: movie
    }
}