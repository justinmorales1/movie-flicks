import React from 'react';
import {createNewAccount} from "../redux/actions/accounts";
import {Grid} from "@mui/material";
import {Field, reduxForm} from "redux-form";

const UpdateHomePage = ({pristine, submitting, handelSubmit, reset}) => {
    return (
        <>
            <form onSubmit={handelSubmit}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <div>
                        <label> Image URL </label>
                        <div>
                            <Field
                                name="image"
                                component="input"
                                type="text"
                                placeholder="Image URL"
                            />
                        </div>
                    </div>
                    <div>
                        <label> Title </label>
                        <div>
                            <Field
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Title"
                            />
                        </div>
                    </div>
                    <div>
                        <label> Creator </label>
                        <div>
                            <Field
                                name="author"
                                component="input"
                                type="email"
                                placeholder="Creator"
                            />
                        </div>
                    </div>
                    <div>
                        <label>Id</label>
                        <div>
                            <Field
                                name="id"
                                component="input"
                                type="text"
                                placeholder="id"
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>Submit</button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </Grid>
            </form>
        </>
    )
}

export default reduxForm({
    form: 'updateHomePage', // a unique identifier for this form
})(UpdateHomePage);