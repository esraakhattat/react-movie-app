import {combineReducers} from "redux"
import FavouriteCountReducer from "./FavouriteCount"
import FavouriteReducer from "./FavouriteReducer"
import MoviesReducer from "./MoviesReducer"



export default combineReducers  ({

    favR: FavouriteReducer,
    favCountR: FavouriteCountReducer,
    movieListR: MoviesReducer
})