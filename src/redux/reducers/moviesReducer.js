import {SEARCH_MOVIES} from "../../constants/constans";


const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export default moviesReducer;