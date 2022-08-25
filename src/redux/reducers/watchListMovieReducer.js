import {REMOVE_MOVIE_FROM_WATCH_LIST, WATCH_LIST_MOVIE} from "../../constants/constans";


const watchListMovieReducer = (state = [], action) => {
    switch (action.type) {
        case WATCH_LIST_MOVIE:
            return [...state, action.payload];
        case REMOVE_MOVIE_FROM_WATCH_LIST:
            console.log("The action was ", action.payload)
            state = state.filter(movie => {
                return movie.Title !== action.payload;
            });
            return [...state]
        default:
            return state;
    }
}

export default watchListMovieReducer;