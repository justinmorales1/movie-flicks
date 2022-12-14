import React from 'react';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {MenuItem} from "@mui/material";
import TheatersIcon from '@mui/icons-material/Theaters';
import { makeStyles } from '@material-ui/styles';
import AvatarImage from "./Avatar";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
}));


const AppBarHeader = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    color="inherit"
                >
                    <TheatersIcon/> Menu
                </Button>

                <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                    <Link to="/" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Home </MenuItem></Link>
                    <Link to="/create-account" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Create Account </MenuItem></Link>
                    <Link to="/movie-search" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Movie Search </MenuItem></Link>
                    <Link to="/watch-list" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Movie Watchlist </MenuItem></Link>
                    <Link to="/account" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Account </MenuItem></Link>
                    <Link to="/movie-reviews" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Movie Reviews </MenuItem></Link>
                    <Link to="/forum" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Forum </MenuItem></Link>
                    <Link to="/update-home-page" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose}> Update Home Page </MenuItem></Link>

                </Menu>
                <Typography variant="h6" color="inherit"   className={classes.title}>
                    Movie Flicks
                </Typography>
                <AvatarImage />
            </Toolbar>
        </AppBar>
    )
}

export default AppBarHeader;