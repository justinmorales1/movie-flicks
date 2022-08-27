import React from 'react';
import {SUBMIT_NEW_ACCOUNT} from "../../constants/constans";

const initialState = {
    firstName:"Justin",
    lastName:"Morales",
    email:"jm.em0210@gmail.com",
    sex:"male",
    comedy:true,
    notes:"I like movies."
}


const newAccountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_NEW_ACCOUNT:
            return action.payload;
        default:
            return state;
    }
}

export default newAccountsReducer;