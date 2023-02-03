import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editSingleMovie } from "../../Store/actions/MovieAction";

import { addToFavourite, removeFromFavourite } from '../../Store/actions/FavouriteCount';
import './Movie.css'
import { addOrRemoveFavourite } from '../../Store/actions/FavouriteAction';
import { ThemeContext } from '../../Context/ThemeContext';
function MovieCard(props) {
    const {contextTheme,setContextTheme}=useContext(ThemeContext)

    let movie = useSelector((state) => state.movieListR.movies.find(
        (singleMovie) => singleMovie.id == props.singleMovie
    ))
    // console.log(movie);

    let starClass = `fav-icon ${movie.isFavourite ? "fa-solid" : "fa-regular"} fa-star`
    const dispatch = useDispatch()
    const addOrRemoveFromFavourite = () => {
        let movie2 = { ...movie, isFavourite: !movie.isFavourite }
        dispatch(editSingleMovie(movie2))
        dispatch(addOrRemoveFavourite(movie2))
        dispatch(movie2.isFavourite ? addToFavourite() : removeFromFavourite())
    }

    const base_url = "https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className={contextTheme=="dark"?"card text-bg-dark m-3":"card m-3"} style={{ "width": "18rem" }}>
                <Link className='movie-link' to={`/movie/${movie.id}`}><img src={`${base_url}${movie.poster_path}`} className="card-img-top img-height" alt={movie.title} /></Link>
                <div className="card-body">
                    <Link className={contextTheme=="dark"?'movie-link':"movie-link-dark"} to={`/movie/${movie.id}`}><h5 className="card-title">{movie.title}</h5></Link>
                    <p className="card-text desc">{movie.overview}</p>
                    <i onClick={addOrRemoveFromFavourite} className={starClass}></i>
                </div>
            </div>
        </>
    )
}
export default MovieCard