import React from 'react';
import {Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {useSelector} from "react-redux";
import {submitNewAccount} from "../redux/actions/accounts";
import {Field, reduxForm} from "redux-form";
import Box from "@mui/material/Box";



const Account = ({handleSubmit}) => {
    const userStoredData = useSelector(state => state.newAccounts)

    return (
        <form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Box
                        component="img"
                        sx={{
                            height: 233,
                            width: 350,
                            maxHeight: { xs: 233, md: 167 },
                            maxWidth: { xs: 350, md: 250 },
                        }}
                        alt="The house from the offer."
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                    />
                </Grid>
                <Grid item xs={6}>
                    <Container>
                        <div>
                            <Typography variant="subtitle1" component="subtitle1">
                                Name
                            </Typography>
                            <div>
                                <TextField name='fullName' defaultValue={userStoredData.firstName + " " + userStoredData.lastName} variant="standard" />
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
                </Grid>
        </Grid>
        </form>
    )
}

export default reduxForm({
    form: 'Accounts'
})(Account)