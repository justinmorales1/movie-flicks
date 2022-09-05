import { configureStore, get } from '@reduxjs/toolkit';
import moviesReducer from "./reducers/moviesReducer";
import { reducer as reduxFormReducer } from 'redux-form';
import selectedMoviesReducer from "./reducers/selectedMovieReducer";
import watchListMovieReducer from "./reducers/watchListMovieReducer";
import newAccountsReducer from "./reducers/newAccountsReducer";
import movieReviewsReducer from "./reducers/movieReviewsReducer";
import featuredMoviesAndShows from "./reducers/feautedMoviesAndShow";

export const store = configureStore({
  reducer: {
    form: reduxFormReducer,
    movies: moviesReducer,
    newAccounts: newAccountsReducer,
    selectedMovie: selectedMoviesReducer,
    watchListMovie: watchListMovieReducer,
    movieReviews: movieReviewsReducer,
    featuredMoviesAndShows: featuredMoviesAndShows
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  }),


});
