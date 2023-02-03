import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addOrRemoveFavourite } from "../../Store/actions/FavouriteAction";
import { addToFavourite, removeFromFavourite } from "../../Store/actions/FavouriteCount";
import { editSingleMovie } from "../../Store/actions/MovieAction";
import './Favourite.css'
function FavouriteCard(props){
    let movie = useSelector((state) => state.movieListR.movies.find(
        (singleMovie) => singleMovie.id == props.favouriteMovie
    ))
    const base_url = "https://image.tmdb.org/t/p/w500";
    const dispatch = useDispatch()
    const remove = () => {
        let movie2 = { ...movie, isFavourite: !movie.isFavourite }
        dispatch(editSingleMovie(movie2))
        dispatch(addOrRemoveFavourite(movie2))
        dispatch(movie2.isFavourite ? addToFavourite() : removeFromFavourite())
    }
    return <>
    <div className="card text-bg-dark m-3" style={{ "width": "18rem" }}>
    <Link className='card-img' to={`/react-movie-app/movie/${movie.id}`}><img src={`${base_url}${movie.poster_path}`} className="card-img-top img-height" alt={movie.title} /></Link>
  <i onClick={remove} className="trash-icon fa-solid fa-trash"></i>
</div>
    </>
}
export default FavouriteCard