import React from 'react';
import {useSelector} from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import HomePageAdminSelectedMovieModal from "./HomePageAdminSelectedMovieModal";
import Box from "@mui/material/Box";
import MovieSearchInput from "../MovieSearchInput";
import HomePageAdminDeleteMovieModal from "./HomePageAdminDeleteMovieModal";

const DeleteFeaturedMoviesOrShowFromHomePage = () => {
    const featuredMovieList = useSelector(state => state.featuredMoviesAndShows)

    const movieList = featuredMovieList?.map((movies, index) => {
        return (
            <Grid item xs={5} key={index}>
                <Card sx={{ maxWidth: 350, maxHeight: 570 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={movies?.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {movies?.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movies?.author}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <HomePageAdminDeleteMovieModal title={movies?.Title} id={index} />
                    </CardActions>
                </Card>
            </Grid>
        )
    })

    return (
        <Box sx={{ flexGrow: 8 }}>
            <Grid container spacing={2} rowSpacing={2} alignItems="center"
                  justifyContent="center">
                {movieList}
            </Grid>
        </Box>
    )
}

export default DeleteFeaturedMoviesOrShowFromHomePage;