import React from 'react';
import Typography from "@mui/material/Typography";

const HomePage = () => {
    return (
        <div>
            <Typography variant="subtitle1" component="h2">
               Featured Movies
            </Typography>
            <Typography variant="subtitle1" component="h2">
                Must Watch Movies
            </Typography>

            <Typography variant="subtitle1" component="h2">
                Must Watch TV Shows
            </Typography>

            <Typography variant="subtitle1" component="h2">
                Movies from your watchlist
            </Typography>
        </div>
    )
}

export default HomePage;