import React from 'react';
import TextField from '@mui/material/TextField';
import {Field, reduxForm} from "redux-form";

const MovieSearchInput = (props) => {
    const { handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <TextField type="text" id="outlined-basic" label="Outlined" variant="outlined" />

                {/*<TextField name="movieInput" type="text" id="outlined-basic" label="Outlined" variant="outlined" />*/}
            </div>
            <div>
                <Field
                    name="firstName"
                    component="input"
                    type="text"
                    placeholder="First Name"
                />
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'movieSearchInput', // a unique identifier for this form
})(MovieSearchInput);

