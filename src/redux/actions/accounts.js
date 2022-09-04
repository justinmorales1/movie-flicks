import {SUBMIT_NEW_ACCOUNT} from "../../constants/constans";
import axiosApi from './../../utilities/axios/axios'


export const submitNewAccount = (payload) => {
    return {
        type: SUBMIT_NEW_ACCOUNT,
        payload
    }
}


export const createNewAccount = (userData) => async (dispatch, getState) => {

    const data = {
        name: userData.firstName + " " + userData.lastName,
        email: userData.email,
        id: "2"
    }

    const tempData = {"name":"Rupert Morales","email":"rupert@yahoo.com","id":"2"}

    console.log("The data is ", data)
    try {
        await axiosApi.put("/user", data)
    } catch (e) {
        console.log("Unable to put new user data")
    }
}