import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import {MenuItem} from "@mui/material";

const AppBarHeader = () => {
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
                    Menu Options
                </Button>

                <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                    <MenuItem onClick={handleClose}> Profile </MenuItem>
                    <MenuItem onClick={handleClose}> Categories </MenuItem>
                    <MenuItem onClick={handleClose}> Forum </MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    )
}

export default AppBarHeader;