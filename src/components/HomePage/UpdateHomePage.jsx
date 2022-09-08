import React from 'react';
import {createNewAccount, updateFeaturedMovies} from "../../redux/actions/accounts";
import {Grid} from "@mui/material";
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import HomePageAdminSearch from "./HomePageAdminSearch";

const UpdateHomePage = (props) => {
    const dispatch = useDispatch();

    const updateFeaturedMovieOrShow = (e) => {
        console.log(e)
        dispatch(updateFeaturedMovies(e))
    }
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <>
            {/*<form onSubmit={handleSubmit(e => updateFeaturedMovieOrShow(e))}>*/}
                <HomePageAdminSearch />
                {/*<Grid*/}
                {/*    container*/}
                {/*    spacing={0}*/}
                {/*    direction="column"*/}
                {/*    alignItems="center"*/}
                {/*    justifyContent="center"*/}
                {/*>*/}
                {/*    <div>*/}
                {/*        <label> Image URL </label>*/}
                {/*        <div>*/}
                {/*            <Field*/}
                {/*                name="img"*/}
                {/*                component="input"*/}
                {/*                type="text"*/}
                {/*                placeholder="Image URL"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <label> Title </label>*/}
                {/*        <div>*/}
                {/*            <Field*/}
                {/*                name="title"*/}
                {/*                component="input"*/}
                {/*                type="text"*/}
                {/*                placeholder="Title"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <label> Creator </label>*/}
                {/*        <div>*/}
                {/*            <Field*/}
                {/*                name="author"*/}
                {/*                component="input"*/}
                {/*                type="text"*/}
                {/*                placeholder="Creator"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <label>Id</label>*/}
                {/*        <div>*/}
                {/*            <Field*/}
                {/*                name="id"*/}
                {/*                component="input"*/}
                {/*                type="text"*/}
                {/*                placeholder="id"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button type="submit" disabled={pristine || submitting}>Submit</button>*/}
                {/*        <button type="button" disabled={pristine || submitting} onClick={reset}>*/}
                {/*            Clear Values*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</Grid>*/}
            {/*</form>*/}
        </>
    )
}

export default reduxForm({
    form: 'updateHomePage', // a unique identifier for this form
})(UpdateHomePage);