import React from 'react';
import Typography from "@mui/material/Typography";
import {Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';

const itemData = [
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_SX300.jpg',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_SX300.jpg',
        title: 'Family Guy',
        author: '@hjrc33',
        cols: 2,
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg',
        title: 'Everything Everywhere All At Once',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmZmMjgyOTUtZjljMS00NjhlLTkzMmItM2EyMzY5NzU0NzFiXkEyXkFqcGdeQXVyNjIzMTEyNDk@._V1_SX300.jpg',
        title: 'The Bear',
        author: '@katie_wasserman',
    },
    // {
    //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    //     title: 'Mushrooms',
    //     author: '@silverdalex',
    //     rows: 2,
    //     cols: 2,
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    //     title: 'Tomato basil',
    //     author: '@shelleypauls',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    //     title: 'Sea star',
    //     author: '@peterlaster',
    // },
    // {
    //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    //     title: 'Bike',
    //     author: '@southside_customs',
    //     cols: 2,
    // },
];

const HomePage = () => {
    return (
        <Container ml={2} >
            <Typography variant="subtitle1" component="h2">
               Featured Movies and Shows
            </Typography>
            <ImageList sx={{ width: 500, height: 450 }} cols={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        {/*<ImageListItemBar*/}
                        {/*    title={item.title}*/}
                        {/*    subtitle={item.author}*/}
                        {/*    actionIcon={*/}
                        {/*        <IconButton*/}
                        {/*            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}*/}
                        {/*            aria-label={`info about ${item.title}`}*/}
                        {/*        >*/}
                        {/*            <InfoIcon />*/}
                        {/*        </IconButton>*/}
                        {/*    }*/}
                        {/*/>*/}
                    </ImageListItem>
                ))}
            </ImageList>
            <Typography variant="subtitle1" component="h2">
                Must Watch Movies
            </Typography>

            <Typography variant="subtitle1" component="h2">
                Must Watch TV Shows
            </Typography>

            <Typography variant="subtitle1" component="h2">
                Movies from your watchlist
            </Typography>
        </Container>
    )
}

export default HomePage;