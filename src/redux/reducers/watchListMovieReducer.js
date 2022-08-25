import {REMOVE_MOVIE_FROM_WATCH_LIST, WATCH_LIST_MOVIE} from "../../constants/constans";

const initialState = [
    { id: 1, Title: 'Starship Troop', Year: '1990', Plot: "Its about a war with Arachnids" },
    { id: 2, Title: 'Game of Thrones', Year: '2009', Plot: "Its a game for a throne" },
    { id: 3, Title: 'Jaws', Year: '2017', Plot: "Its a movie about a killer shark." },
    { id: 4, Title: 'South Park', Year: '1994', Plot: "Its a show about 4 kids from south park." },
]

const watchListMovieReducer = (state = initialState, action) => {
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