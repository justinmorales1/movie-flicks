import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./reducers/moviesReducer";
import { reducer as reduxFormReducer } from 'redux-form';
import selectedMoviesReducer from "./reducers/selectedMovieReducer";


export const store = configureStore({
  reducer: {
    form: reduxFormReducer,
    movies: moviesReducer,
    selectedMovie: selectedMoviesReducer
  },
  devTools: true

});
