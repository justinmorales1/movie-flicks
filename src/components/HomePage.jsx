import React from 'react';
import Typography from "@mui/material/Typography";
import {Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import ImageListMainPage from "./ImageListMainPage";
import {itemData, mustWatchTVShows} from "../constants/newData";

const HomePage = () => {
    return (
        <Container ml={2} >
            <ImageListMainPage itemData={itemData} header="Featured Movies and Shows" columns={4} width={800} height={450}/>

            <ImageListMainPage itemData={itemData} header="Must Watch Movies" columns={3} width={500} height={450}/>

            <ImageListMainPage itemData={mustWatchTVShows} header="Must Watch TV Shows" columns={4} width={800} height={250}/>

            <ImageListMainPage itemData={itemData} header="Featured Movies and Shows" columns={4} width={800} height={300}/>
        </Container>
    )
}

export default HomePage;