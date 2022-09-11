import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {selectedMovieInformation} from "../../redux/actions/httpRequests";
import {useDispatch, useSelector} from "react-redux";
import {deleteFeaturedMovies} from "../../redux/actions/accounts";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const HomePageAdminSelectedMovieModal = ({title, id}) => {
    const dispatch = useDispatch();
    const movieInformation = useSelector(state => state.selectedMovie?.data)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
        dispatch(selectedMovieInformation(title))
    };

    const deleteFeaturedMovieOrShow = (e) => {
        console.log(e)
        dispatch(deleteFeaturedMovies(e))
    }

    return (
        <>
            <Button onClick={() => deleteFeaturedMovieOrShow(id)}> Delete </Button>
        </>
    )
}

export default HomePageAdminSelectedMovieModal;