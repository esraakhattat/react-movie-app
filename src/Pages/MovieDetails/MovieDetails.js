import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { editSingleMovie } from "../../Store/actions/MovieAction";
import { addToFavourite, removeFromFavourite } from "../../Store/actions/FavouriteCount";
import './MovieDetails.css'
import { addOrRemoveFavourite } from "../../Store/actions/FavouriteAction";
import { LangContext } from "../../Context/LangContext";
import { ThemeContext } from "../../Context/ThemeContext";
function MovieDetails(){
  const {contextTheme,setContextTheme}=useContext(ThemeContext)
  const {contextLang,setContextLang}=useContext(LangContext)
    const [movie,setMovie]=useState({})
    const movieId=useParams().id
    const base_url="https://image.tmdb.org/t/p/w500";
    // console.log(movieId);
    let movieFromRedux = useSelector((state) => state.movieListR.movies.find(
      (singleMovie) => singleMovie.id == movieId
  ))
  let starClass = `fav-icon-details ${movieFromRedux.isFavourite ? "fa-solid" : "fa-regular"} fa-star`
  const dispatch = useDispatch()
  const addOrRemoveFromFavourite = () => {
      let movie2 = { ...movieFromRedux, isFavourite: !movieFromRedux.isFavourite }
      dispatch(editSingleMovie(movie2))
      dispatch(addOrRemoveFavourite(movie2))
      dispatch(movie2.isFavourite ? addToFavourite() : removeFromFavourite())
  }
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9dee35d33d48888bd478fed31c90d916&language=${contextLang}`)
        .then((data)=>setMovie(data.data))
        .catch((err)=>console.log(err))
    },[contextLang])


    return<div className={contextTheme=="dark"?"bg-dark background p-5":"background p-5"}> <div className="container">
    <div className={contextTheme=="dark"?"card m-auto text-bg-dark":"card m-auto "} style={{"max-width": "80%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={`${base_url}${movie.poster_path}`} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.overview}</p>
        <p className="card-text"><small className="text-muted">{movie.release_date}</small></p>
        <i onClick={addOrRemoveFromFavourite} className={starClass}></i>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
}
export default MovieDetails;