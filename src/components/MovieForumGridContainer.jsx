import React from 'react';
import {Grid} from "@mui/material";
import MovieForumGridItems from "./MovieForumGridItems";
import { makeStyles } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));


const MovieForumGridContainer = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={1} columns={1} >
            <MovieForumGridItems classes={classes}/>
            <MovieForumGridItems classes={classes}/>
            <MovieForumGridItems classes={classes}/>
        </Grid>
    )
}

export default MovieForumGridContainer;