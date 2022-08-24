import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MovieCategories from "./components/MovieCategories";
import {Container} from "@mui/material";
import AppBarHeader from "./components/AppBarHeader";
import MovieSearchInput from "./components/MovieSearchInput";
import SimpleForm from "./components/SimpleForm";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";


function App() {
    // const location = useLocation();
    // console.log('hash', location.hash);
    // console.log('pathname', location.pathname);
    // console.log('search', location.search);
    const Home = () => <div>This is the home page.</div>

    return (
    <div>
        <Container maxWidth='xl' disableGutters>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} >
                <BrowserRouter>
                <AppBarHeader />
                <MovieSearchInput />
                {/*<MovieList />*/}
                {/*<MovieCategories />*/}
                {/*<MovieCategories />*/}
                {/*<BrowserRouter>*/}
                    <Routes>
                        <Route path="/" element={<MovieList/>} />
                    </Routes>
                </BrowserRouter>
                {/*<SimpleForm />*/}
            </Box>
        </Container>
    </div>
  );
}

export default App;
