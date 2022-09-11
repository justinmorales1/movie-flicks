import React, {useState} from 'react';
import {createNewAccount, updateFeaturedMovies} from "../../redux/actions/accounts";
import {Grid} from "@mui/material";
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import HomePageAdminSearch from "./HomePageAdminSearch";
import AdminPageButtons from "./AdminPageButtons";
import DeleteFeaturedMoviesOrShowFromHomePage from "./DeleteFeaturedMoviesOrShowFromHomePage";
import Box from "@mui/material/Box";

const UpdateHomePage = (props) => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState('')

    const updateFeaturedMovieOrShow = (e) => {
        console.log(e)
        dispatch(updateFeaturedMovies(e))
    }

    console.log("The current page is ", currentPage)
    return (
        <Box textAlign="center" sx={{ m: 2}}>
            {/*<form onSubmit={handleSubmit(e => updateFeaturedMovieOrShow(e))}>*/}
            <AdminPageButtons setState={setCurrentPage}/>
            {currentPage === 'Update' ? <HomePageAdminSearch /> : null}
            {currentPage === 'Delete' ? <DeleteFeaturedMoviesOrShowFromHomePage /> : null}
        </Box>
    )
}

export default reduxForm({
    form: 'updateHomePage', // a unique identifier for this form
})(UpdateHomePage);