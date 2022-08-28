import React from 'react';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CardMedia from "@mui/material/CardMedia";
import {Grid} from "@mui/material";

const MovieReviewComments = () => {
    return (
        <Grid  container>
            <Card sx={{ minWidth: 220 }}>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            sx={{ width: '220px' }}
                            image="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-837358.jpg&fm=jpg"
                            alt="Live from space album cover"
                            />
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Justin Morales
                            </Typography>
                            <Typography variant="body2">
                                Wow what a terrifc audience .
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><EditIcon/> Edit </Button>
                            <Button size="small"><DeleteIcon/> Delete </Button>
                        </CardActions>
                    </Grid>
            </Card>
        </Grid>
    )
}

export default MovieReviewComments;
