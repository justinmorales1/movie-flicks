import {WATCH_LIST_MOVIE} from "../../constants/constans";

export const watchListMovie = (movie) => {
    return {
        type: WATCH_LIST_MOVIE,
        payload: movie
    }
}