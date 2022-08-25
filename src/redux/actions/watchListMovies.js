import {REMOVE_MOVIE_FROM_WATCH_LIST, WATCH_LIST_MOVIE} from "../../constants/constans";

export const watchListMovie = (movie) => {
    return {
        type: WATCH_LIST_MOVIE,
        payload: movie
    }
}

export const removeMovie = (movie) => {
    return {
        type: REMOVE_MOVIE_FROM_WATCH_LIST,
        payload: movie
    }
}