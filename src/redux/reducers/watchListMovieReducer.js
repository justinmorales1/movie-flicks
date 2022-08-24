import {WATCH_LIST_MOVIE} from "../../constants/constans";


const watchListMovieReducer = (state = [], action) => {
    switch (action.type) {
        case WATCH_LIST_MOVIE:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default watchListMovieReducer;