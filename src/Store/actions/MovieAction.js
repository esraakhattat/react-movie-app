import axios from "axios";

export const getMoviesList = (lang) => (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9dee35d33d48888bd478fed31c90d916&language=${lang}`)
        .then((data) => {
            // console.log(data.data.results);
            let movieF
            movieF = data.data.results.map((movie) => {
                movie.isFavourite = false
                return movie
            })
            // console.log(movieF);
            dispatch({
                type: "MOVIES_LIST",
                payload: movieF,
            });
        })
        .catch((err) => console.log(err))
}

export const editSingleMovie=(payload)=>{
    // const movie=(state.find((singleMovie) => singleMovie.id ==action.payload))
    //         movie.isFavourite=!movie.isFavourite
            // return{
            //     ...state,
            //     movies:[...state.movies, movie]
            // }
    return {
        type: "EDIT_SINGLE_MOVIE",
        payload
    }
}
