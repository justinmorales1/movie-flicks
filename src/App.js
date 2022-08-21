import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MovieCategories from "./components/MovieCategories";
import {Container} from "@mui/material";
import AppBarHeader from "./components/AppBarHeader";


function App() {
  return (
    <div>
        <CssBaseline />
        <Container maxWidth='xl' disableGutters>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                <AppBarHeader />
                <MovieCategories />
            </Box>
        </Container>
    </div>
  );
}

export default App;
