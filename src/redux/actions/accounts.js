import {SUBMIT_NEW_ACCOUNT} from "../../constants/constans";


export const submitNewAccount = (payload) => {
    return {
        type: SUBMIT_NEW_ACCOUNT,
        payload
    }
}