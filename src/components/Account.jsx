import React from 'react';
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Account = () => {
    return (
        <Container>
            <div>
                <Typography variant="subtitle1" component="subtitle1">
                    Name
                </Typography>
                <div>
                    <TextField defaultValue="Justin Morales" variant="standard" />
                </div>
            </div>
            <div>
                <Typography variant="subtitle1" component="subtitle1">
                    Sex
                </Typography>
                <div>
                    <TextField defaultValue="Male" variant="standard" />
                </div>
            </div>
            <div>
                <Typography variant="subtitle1" component="subtitle1">
                    Email
                </Typography>
                <div>
                    <TextField defaultValue="my.email@gmail.com" variant="standard" />
                </div>
            </div>
            <div>
                <Typography variant="subtitle1" component="subtitle1">
                    Movies Types
                </Typography>
                <div>
                    <TextField  defaultValue="Action Comedy Drama" variant="standard" />
                </div>
            </div>
        </Container>
    )
}

export default Account;