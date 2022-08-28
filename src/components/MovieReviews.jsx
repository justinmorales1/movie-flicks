import React from 'react';
import {Container} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MovieReviewComments from "./MovieReviewComments";

const MovieReviews  = () => {
    return (
        <Container>
            <MovieReviewComments />
        </Container>
    )
}

export default MovieReviews;
