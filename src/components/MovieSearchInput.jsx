import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Field, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {searchForMovies} from "../redux/actions/httpRequests";


const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);

const MovieSearchInput = (props) => {
    const dispatch = useDispatch();
    const movieInput = useSelector(state => state.form.movieSearchInput?.values?.movieInput)
    const { handleSubmit} = props;

    const movieSearch = () => {
        dispatch(searchForMovies(movieInput))
    }

    return (
        <form onSubmit={handleSubmit(movieSearch)} >
                {/*<TextField type="text" id="outlined-basic" label="Outlined" variant="outlined" />*/}
            <Box textAlign="center" sx={{ m: 2}}>
                <Field
                        name="movieInput"
                        component={renderTextField}
                        label="Movie Input"
                        type="text"
                    />
                <Button type="submit" variant="contained" sx={{m:1, mx:2}}> Submit </Button>
            </Box>
        </form>
    )
}

export default reduxForm({
    form: 'movieSearchInput', // a unique identifier for this form
})(MovieSearchInput);

