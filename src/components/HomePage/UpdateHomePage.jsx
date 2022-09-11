import React, {useState} from 'react';
import {createNewAccount, updateFeaturedMovies} from "../../redux/actions/accounts";
import {Grid} from "@mui/material";
import {Field, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import HomePageAdminSearch from "./HomePageAdminSearch";
import AdminPageButtons from "./AdminPageButtons";
import DeleteFeaturedMoviesOrShowFromHomePage from "./DeleteFeaturedMoviesOrShowFromHomePage";
import Box from "@mui/material/Box";

const UpdateHomePage = () => {
    const [currentPage, setCurrentPage] = useState('')

    return (
        <Box textAlign="center" sx={{ m: 2}}>
            <AdminPageButtons setState={setCurrentPage}/>
            {currentPage === 'Update' ? <HomePageAdminSearch /> : null}
            {currentPage === 'Delete' ? <DeleteFeaturedMoviesOrShowFromHomePage /> : null}
        </Box>
    )
}

export default reduxForm({
    form: 'updateHomePage', // a unique identifier for this form
})(UpdateHomePage);