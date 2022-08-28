import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Field, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import Button from "@mui/material/Button";
import {searchForMovies} from "../redux/actions/httpRequests";
import {ButtonGroup, Grid} from "@mui/material";
import {Bolt} from "@mui/icons-material";


const renderTextField = (
    { input, label, meta: { touched, error }, ...custom },
) => (
    <TextField
        {...input}
        {...custom}
    />
);

const AddMovieReview = (props) => {
    const dispatch = useDispatch();
    const movieInput = useSelector(state => state.form.movieSearchInput?.values?.movieInput)
    const { handleSubmit} = props;

    const addMovieReview = () => {
        console.log('Adding a new movie review')
        // dispatch(searchForMovies(movieInput))
    }

    return (
        <form onSubmit={handleSubmit(addMovieReview)} >
            <Box component="form"
                 sx={{
                     '& > :not(style)': { m: 1, width: '25ch' },
                 }}
                 noValidate
                 autoComplete="off" textAlign='center'>

                <Field
                    name="movieName"
                    component={renderTextField}
                    label="movieName"
                    type="text"
                    placeholder="Movie Name"
                />
                <Field
                    name="userName"
                    component={renderTextField}
                    label="Movie Input"
                    type="text"
                    placeholder="User Name"
                />
                <Field
                    name="review"
                    component={renderTextField}
                    label="review"
                    type="text"
                    placeholder="Movie review"
                />
            </Box>
            <Box textAlign='center' mb={3} >
                <Button type="submit" variant="contained" sx={{m:1, mx:2}}> Add Review </Button>
            </Box>
        </form>
    )
}

export default reduxForm({
    form: 'addMovieReview', // a unique identifier for this form
})(AddMovieReview);

