import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useSelector} from "react-redux";


// Title(pin):"The Lighthouse"
// Year(pin):"2019"
// imdbID(pin):"tt7984734"
// Type(pin):"movie"
// Poster(pin):"https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"


const MovieList = () => {
    const movieInformation = useSelector(state => state.movies?.data?.Search[0])
    const movieInformationList = useSelector(state => state.movies.data?.Search)

    const movieList = movieInformationList?.map(movies => {
        return (
            <Grid item xs={5}>
                <Card sx={{ maxWidth: 350, maxHeight: 270 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={movies?.Poster}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movies?.Title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movies?.Year}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Select</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    })

    return (
        <Box sx={{ flexGrow: 8 }}>
            <Grid container spacing={2} rowSpacing={2} alignItems="center"
                  justifyContent="center">
                {movieInformationList ? movieList : null}
            </Grid>
        </Box>
    )
}

export default MovieList;