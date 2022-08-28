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

const MovieReviews  = () => {
    return (
        <Box m={4} pb={8} sx={{ flexGrow: 8 }}>
            <Grid container spacing={2} rowSpacing={3} gap={4} alignItems="center"
                  justifyContent="center">
                <MovieReviewComments />
                <MovieReviewComments />
                <MovieReviewComments />
            </Grid>
        </Box>
    )
}

export default MovieReviews;
