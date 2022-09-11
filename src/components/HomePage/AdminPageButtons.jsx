import React from 'react';
import Button from "@mui/material/Button";

const AdminPageButtons = ({setState}) => {
    return (
        <>
            <Button onClick={ () => {setState("Update")}}> Add Movies To Featured List </Button>
            <Button onClick={() => {setState("Delete")}}> Remove Movies from Featured List </Button>
        </>
    )
}

export default AdminPageButtons;