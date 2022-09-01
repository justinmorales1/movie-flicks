import React from 'react';
import MovieForumGridContainer from "./MovieForumGridContainer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Forum = () => {
    return (
        <div>
            <Box textAlign="center" sx={{ m: 2}}>
                <Typography gutterBottom variant="h3" component="div">
                    Movie and Show Forum
                </Typography>
            </Box>
            <MovieForumGridContainer />
        </div>
    )
}

export default Forum;