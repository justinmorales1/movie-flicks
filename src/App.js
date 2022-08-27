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
import CreateAccount from "./components/CreateAccount";
import Account from "./components/Account";

const App = () => {
    return (
        <>
            <CssBaseline />

            <Container maxWidth='xl' disableGutters >
            <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} >
                <BrowserRouter>
                <AppBarHeader />
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/movie-search" element={<MovieSearch/>} />
                        <Route path="/watch-list" element={<MovieWatchList/>} />
                        <Route path="/create-account" element={<CreateAccount/>} />
                        <Route path="/account" element={<Account/>} />
                    </Routes>
                </BrowserRouter>
            </Box>
        </Container>
        </>
  );
}

export default App;
