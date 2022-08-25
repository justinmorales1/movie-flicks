import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux";
import SelectedMovieModal from "./SelectedMovieModal";
import MovieSearchInput from "./MovieSearchInput";


// Title(pin):"The Lighthouse"
// Year(pin):"2019"
// imdbID(pin):"tt7984734"
// Type(pin):"movie"
// Poster(pin):"https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"


const MovieSearch = () => {
    const movieInformationList = useSelector(state => state.movies.data?.Search)

    const movieList = movieInformationList?.map((movies, index) => {
        return (
            <Grid item xs={5} key={index}>
                <Card sx={{ maxWidth: 350, maxHeight: 270 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={movies?.Poster}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {movies?.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movies?.Year}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <SelectedMovieModal  year={movies?.Year} title={movies?.Title} />
                    </CardActions>
                </Card>
            </Grid>
        )
    })

    return (
        <Box sx={{ flexGrow: 8 }}>
            <MovieSearchInput />
            <Grid container spacing={2} rowSpacing={2} alignItems="center"
                  justifyContent="center">
                {movieInformationList ? movieList : null}
            </Grid>
        </Box>
    )
}

export default MovieSearch;