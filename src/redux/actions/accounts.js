import {SUBMIT_NEW_ACCOUNT} from "../../constants/constans";
import axiosApi from './../../utilities/axios/axios'
import {watchListMovie} from "./watchListMovies";
import {featuredMovies} from "./homePageActions";


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
        id: userData.id
    }

    const tempData = {"name":"Rupert Morales","email":"rupert@yahoo.com","id":"2"}

    console.log("The data is ", data)
    try {
        await axiosApi.put("/user", data)
    } catch (e) {
        console.log("Unable to put new user data")
    }
}

export const retrieveUsersWatchList = () => async (dispatch, getState) => {
    try {
        const response = await axiosApi.get("/user-data/0");
        console.log("The response is ", response)
        dispatch(watchListMovie(response.data?.Item?.watchList))
    } catch (e) {
        console.log("Unable to put new user data")
    }
}

// {
//     "Title": "Test Movies",
//     "id": 4,
//     "Year": "1990",
//     "Plot": "Its about a war with Arachnids"
// }

export const addMovieToUserWatchList = (selectedMovieOrShow) => async (dispatch, getState) => {
    console.log("The data before is ", selectedMovieOrShow)
    try {
        // console.log("The data is ", data)
        const data = {
            "Title": selectedMovieOrShow.Title,
            "id": 5,
            "Year": selectedMovieOrShow.Year,
            "Plot": selectedMovieOrShow.Plot
        }
        console.log("The data is ", data)
        await axiosApi.post("/user/0", data);
        // dispatch(watchListMovie(response.data?.Item?.watchList))
    } catch (e) {
        console.log("Unable to put new user data")
    }
}

export const retrieveFeaturedMovies = () => async (dispatch) => {
    console.log("The featured movies are")
    try {
        const response = await axiosApi.get("/featured");
        console.log("The response is ", response)
        dispatch(featuredMovies(response.data?.Items[0]?.featuredMoviesAndShows))
    } catch (e) {
        console.log("Unable to put new user data")
    }
}

export const updateFeaturedMovies = (update, index) => async (dispatch, getState) => {
    console.log("The data before is ", update)
    try {
        // console.log("The data is ", data)
        const data = {
            "title": update.Title,
            "id": index,
            "img": update.Poster,
            "author": update.Writer
        }
        console.log("The data is ", data)
        await axiosApi.post("/featured/0", data);
        // dispatch(watchListMovie(response.data?.Item?.watchList))
    } catch (e) {
        console.log("Unable to put new user data")
    }
}

export const deleteFeaturedMovies = (update) => async (dispatch, getState) => {
    console.log("The data before is ", update)
    try {
        // console.log("The data is ", data)
        const data = {
            "id": update
        }
        console.log("The data is ", data)
        await axiosApi.post("/remove-featured-movies/0", data);
        // dispatch(watchListMovie(response.data?.Item?.watchList))
    } catch (e) {
        console.log("Unable to put new user data")
    }
}