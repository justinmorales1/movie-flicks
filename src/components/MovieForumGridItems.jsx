import React from 'react';
import {Grid, Paper} from "@mui/material";


const MovieForumGridItems = ({classes}) => {

    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}> Movie form grid item </Paper>
            </Grid>
        </>
    )
}

export default MovieForumGridItems;