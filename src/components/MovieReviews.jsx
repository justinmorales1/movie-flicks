import React from 'react';
import {Container} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MovieReviewComments from "./MovieReviewComments";
import CardMedia from "@mui/material/CardMedia";
import SelectedMovieModal from "./SelectedMovieModal";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import {randomImage} from "../utilities";
import AddMovieReview from "./AddMovieReview";
import {useSelector} from "react-redux";

const MovieReviews  = () => {
    const movieReviews = useSelector(state => state.movieReviews)
    console.log(randomImage())
    const randomImage1 = randomImage();
    const randomImage2 = randomImage();
    const randomImage3 = randomImage();
    const randomImage4 = randomImage();

    const addMovieReviews = movieReviews.map((movie, index) => {
        return (
            <MovieReviewComments key={index} MovieTitle={movie.movieName} UserName={movie.userName} Review={movie.review} Image={randomImage4}/>
        )
    })


    return (
        <Box m={4} pb={8} sx={{ flexGrow: 8 }}>
            <AddMovieReview />
            <Grid container spacing={2} rowSpacing={3} gap={4} alignItems="center"
                  justifyContent="center">
                {addMovieReviews}
                <MovieReviewComments MovieTitle="Jaws" UserName="Keith Urban" Review="I hate Sharks" Image={randomImage1}/>
                <MovieReviewComments MovieTitle="Everything Everywhere All At Once" UserName="Tom Felvers" Review="Awesome Movie!" Image={randomImage2}/>
                <MovieReviewComments MovieTitle="Starship Troopers" UserName="Rico Sanchez" Review="The only good bug is a dead bug." Image={randomImage3}/>
            </Grid>
        </Box>
    )
}

export default MovieReviews;
