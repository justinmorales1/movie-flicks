import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {reduxForm} from "redux-form";
import {useSelector} from "react-redux";

// Actors: "Maribel Verdú, Joaquín Furriel, Joaquín Rapalini"
// Awards: "2 nominations"
// BoxOffice: "N/A"
// Country: "Spain, Argentina"
// DVD: "11 Dec 2019"
// Director: "Gerardo Olivares"
// Genre: "Biography, Drama, Romance"
// Language: "Spanish"
// Metascore: "N/A"
// Plot: "A mother with an autistic child travel from Spain to Argentina looking to help her son to connect with his emotions."
// Poster: "https://m.media-amazon.com/images/M/MV5BOThlMzRkMDYtYzZmOC00Mjg5LTk4MTQtZTMyODQyMzkxYzZjXkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "TV-MA"
// Ratings: [{…}]
// Released: "16 Dec 2016"
// Response: "True"
// Runtime: "110 min"
// Title: "The Lighthouse of the Whales"
// Type: "movie"
// Website: "N/A"
// Writer: "Roberto Bubas, Gerardo Olivares, Lucía Puenzo"
// Year: "2016"
// id: 2
// imdbID: "tt4944658"
// imdbRating: "6.7"
// imdbVotes: "3,921"


const columns = [
    { field: 'Title', headerName: 'Title', width: 130 },
    { field: 'Year', headerName: 'Year', width: 130 },
    { field: 'Plot', headerName: 'Plot', width: 130 },
    // {
    //     field: 'age',
    //     headerName: 'Age',
    //     type: 'number',
    //     width: 90,
    // },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
];

const rows = [
    { id: 1, Title: 'Starship Troop', Year: 'Jon', Plot: "Its about a war with Arachnids" },
    { id: 2, Title: 'Game of Thrones', Year: 'Cersei', Plot: "Its a game for a throne" },
    { id: 3, Title: 'South Park', Year: 'Jaime', Plot: "Its a show about 4 kids from south park." },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const MovieWatchList = (props) => {
    const movieList = useSelector(state => state.watchListMovie)
    const { handleSubmit} = props;

    movieList.forEach((movie, i) => {
        movie.id = i;
    });

    // let movies = rows.concat(movieList)
    //
    // console.log("The movie list is ", movies)

    return (
        <form onSubmit={handleSubmit} >
            <div style={{ height: 400, width: '100%' }}>
                <Box textAlign="center" sx={{ m: 2}}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        Your Movie Watch List
                    </Typography>
                </Box>
                <DataGrid
                    rows={movieList}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onCellClick={(e)=>console.log(e)}
                />
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'movieWatchList', // a unique identifier for this form
})(MovieWatchList);
