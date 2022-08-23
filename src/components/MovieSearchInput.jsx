import React from 'react';
import TextField from '@mui/material/TextField';
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
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

    const { handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit(searchForMovies('The lighthouse'))}>
            <div>
                {/*<TextField type="text" id="outlined-basic" label="Outlined" variant="outlined" />*/}
                <Field
                    name="movieInput"
                    component={renderTextField}
                    label="Movie Input"
                    type="text"
                />
                <Button type="submit" > Submit </Button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'movieSearchInput', // a unique identifier for this form
})(MovieSearchInput);

