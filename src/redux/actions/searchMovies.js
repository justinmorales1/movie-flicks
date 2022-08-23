import {SEARCH_MOVIES} from "../../constants/constans";


export const searchMovies = (movies) => {
    return {
        type: SEARCH_MOVIES,
        payload: movies
    }
}