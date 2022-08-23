import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./reducers/moviesReducer";
import { reducer as reduxFormReducer } from 'redux-form';


export const store = configureStore({
  reducer: {
    form: reduxFormReducer,
    movies: moviesReducer,
  },
  devTools: true

});
