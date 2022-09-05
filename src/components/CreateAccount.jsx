import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {useDispatch, useSelector} from "react-redux";
import axiosApi from '../utilities/axios/axios'
import {createNewAccount, submitNewAccount} from "../redux/actions/accounts";
import {Grid} from "@mui/material";

const CreateAccount = (props) => {
    const dispatch = useDispatch();
    const formValues = useSelector(state => state.form.createAccount?.values)

    const { handleSubmit, pristine, reset, submitting } = props;

    console.log(formValues)

    return (
        <form onSubmit={handleSubmit((values) => dispatch(createNewAccount(values)))}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <div>
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
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
                <label>Sex</label>
                <div>
                    <div>
                        <label>
                            <Field name="sex" component="input" type="radio" value="male" />
                            {' '}
                            Male
                        </label>
                        <label>
                            <Field name="sex" component="input" type="radio" value="female" />
                            {' '}
                            Female
                        </label>
                        <label>
                            <Field name="sex" component="input" type="radio" value="female" />
                            {' '}
                            Lizard
                        </label>
                    </div>
                </div>
                <label> Favorite Movie Types</label>
                    <div>
                        <label htmlFor="employed"> Comedy </label>
                        <Field
                            name="comedy"
                            id="comedy"
                            component="input"
                            type="checkbox"
                        />
                    </div>
                <div>
                    <label htmlFor="employed"> Drama </label>
                    <Field
                        name="drama"
                        id="drama"
                        component="input"
                        type="checkbox"
                    />
                </div>
                <div>
                    <label htmlFor="employed"> Horror </label>
                    <Field
                        name="horror"
                        id="horror"
                        component="input"
                        type="checkbox"
                    />
                </div>
                <div>
                    <label htmlFor="employed"> Action </label>
                    <Field
                        name="action"
                        id="action"
                        component="input"
                        type="checkbox"
                    />
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea" />
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
    );
};

export default reduxForm({
    form: 'createAccount', // a unique identifier for this form
})(CreateAccount);
