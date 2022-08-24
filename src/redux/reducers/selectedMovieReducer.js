import {SELECTED_MOVIE} from "../../constants/constans";


const moviesReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECTED_MOVIE:
            return action.payload;
        default:
            return state;
    }
}

export default moviesReducer;