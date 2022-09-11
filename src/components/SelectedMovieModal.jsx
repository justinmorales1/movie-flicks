import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {selectedMovieInformation} from "../redux/actions/httpRequests";
import {useDispatch, useSelector} from "react-redux";
import {watchListMovie} from "../redux/actions/watchListMovies";
import {addMovieToUserWatchList} from "../redux/actions/httpRequests/accounts";

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

// selectedMovie.data
// Title(pin):"Titanic"
// Year(pin):"1997"
// Rated(pin):"PG-13"
// Released(pin):"19 Dec 1997"
// Runtime(pin):"194 min"
// Genre(pin):"Drama, Romance"
// Director(pin):"James Cameron"
// Writer(pin):"James Cameron"
// Actors(pin):"Leonardo DiCaprio, Kate Winslet, Billy Zane"
// Plot(pin):"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
// Language(pin):"English, Swedish, Italian, French"
// Country(pin):"United States"
// Awards(pin):"Won 11 Oscars. 125 wins & 83 nominations total"

const SelectedMovieModal = ({title}) => {
    const dispatch = useDispatch();
    const movieInformation = useSelector(state => state.selectedMovie?.data)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true)
        dispatch(selectedMovieInformation(title))
    };

    const addMovieToWatchList = () => {
        console.log("The move information is ", movieInformation)
        dispatch(watchListMovie(movieInformation))
        dispatch(addMovieToUserWatchList(movieInformation))
    }

    const handleClose = () => setOpen(false);

    return (
        <>
            <Button onClick={handleOpen}> More Info </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {movieInformation?.Title} - {movieInformation?.Year}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {movieInformation?.Plot}
                    </Typography>
                    <Button onClick={addMovieToWatchList}> Select Movie </Button>
                </Box>
            </Modal>
        </>
    )
}

export default SelectedMovieModal;