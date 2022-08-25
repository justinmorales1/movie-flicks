import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MovieCategories from "./components/MovieCategories";
import {Container} from "@mui/material";
import AppBarHeader from "./components/AppBarHeader";
import MovieSearchInput from "./components/MovieSearchInput";
import SimpleForm from "./components/CreateAccount";
import MovieSearch from "./components/MovieSearch";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MovieWatchList from "./components/MovieWatchList";
import HomePage from "./components/HomePage";


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
                {/*<MovieSearchInput />*/}
                {/*<MovieSearch />*/}
                {/*<MovieCategories />*/}
                {/*<MovieCategories />*/}
                {/*<BrowserRouter>*/}
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/movie-search" element={<MovieSearch/>} />
                        <Route path="/watch-list" element={<MovieWatchList/>} />
                        <Route path="/create-account" element={<MovieWatchList/>} />
                    </Routes>
                </BrowserRouter>
                {/*<SimpleForm />*/}
            </Box>
        </Container>
    </div>
  );
}

export default App;
