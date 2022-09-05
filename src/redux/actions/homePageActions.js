import {FEATURED} from "../../constants/constans";

export const featuredMovies = (movie) => {
    return {
        type: FEATURED,
        payload: movie
    }
}