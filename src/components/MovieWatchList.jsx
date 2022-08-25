import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import {reduxForm} from "redux-form";



const columns = [
    { field: 'MovieName', headerName: 'Movie Name', width: 130 },
    { field: 'MovieYear', headerName: 'Movie Year', width: 130 },
    { field: 'MovieDescription', headerName: 'Movie Description', width: 130 },
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
    { id: 1, MovieName: 'Starship Troop', MovieYear: 'Jon', MovieDescription: "Its about a war with Arachnids" },
    { id: 2, MovieName: 'Game of Thrones', MovieYear: 'Cersei', MovieDescription: "Its a game for a throne" },
    { id: 3, MovieName: 'South Park', MovieYear: 'Jaime', MovieDescription: "Its a show about 4 kids from south park." },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const MovieWatchList = (props) => {

    const { handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} >
            <div style={{ height: 400, width: '100%' }}>
                <Box textAlign="center" sx={{ m: 2}}>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        Your Movie Watch List
                    </Typography>
                </Box>
                <DataGrid
                    rows={rows}
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
