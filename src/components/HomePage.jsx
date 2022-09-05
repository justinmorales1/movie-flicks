import React, {useEffect} from 'react';
import Typography from "@mui/material/Typography";
import {Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import ImageListMainPage from "./ImageListMainPage";
import {itemData, mustWatchTVShows} from "../constants/newData";
import {retrieveFeaturedMovies} from "../redux/actions/accounts";
import {useDispatch, useSelector} from "react-redux";

const HomePage = () => {
    const dispatch = useDispatch();
    const featuredMovies = useSelector(state => state.featuredMoviesAndShows)

    useEffect(() => {
        dispatch(retrieveFeaturedMovies());
    },[])

    return (
        <Container ml={2} >
            <ImageListMainPage itemData={featuredMovies} header="Featured Movies and Shows" columns={4} width={800} height={450}/>

            <ImageListMainPage itemData={itemData} header="Must Watch Movies" columns={3} width={500} height={450}/>

            <ImageListMainPage itemData={mustWatchTVShows} header="Must Watch TV Shows" columns={4} width={800} height={250}/>

            <ImageListMainPage itemData={itemData} header="Featured Movies and Shows" columns={4} width={800} height={300}/>
        </Container>
    )
}

export default HomePage;