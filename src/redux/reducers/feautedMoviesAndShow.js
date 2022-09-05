import {FEATURED} from "../../constants/constans";


const featuredMoviesAndShows = (state = [], action) => {
    switch (action.type) {
        case FEATURED:
            return action.payload;
        default:
            return state;
    }
}

export default featuredMoviesAndShows;