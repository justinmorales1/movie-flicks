import axios from "axios";


export const searchForMovies = (title) => {
    console.log("The search movies title is ", title)
    return (dispatch, getState) => {
        axios.get(`http://www.omdbapi.com/?&apikey=c335ed8c&s=${title}`).then((response) => {
            console.log("The response is ", response);
        }).catch(error => {
            console.log("The error was ", error)
        })
    }
}
