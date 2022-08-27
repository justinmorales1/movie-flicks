import React from 'react';
import Typography from "@mui/material/Typography";
import {ImageList, ImageListItem} from "@mui/material";

const ImageListMainPage = ({itemData, header, columns, width, height}) => {
    return (
        <>
        <Typography variant="subtitle1" component="h2">
            {header}
        </Typography>
        <ImageList sx={{ width: width, height: height }} cols={columns}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
        </>
    )
}

export default ImageListMainPage;