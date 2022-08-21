


const moviesReducer = (state = "Action", action) => {
    switch (action.type) {
        case "Movies":
            return "Comedy";
        default:
            return state;
    }
}

export default moviesReducer;