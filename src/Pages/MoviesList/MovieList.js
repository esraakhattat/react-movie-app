// import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LangContext } from "../../Context/LangContext";
import { ThemeContext } from "../../Context/ThemeContext";
import { getMoviesList } from "../../Store/actions/MovieAction";
import MovieCard from "../MovieCard/MovieCard";

function MoviesList() {
    const dispatch = useDispatch()
    const { contextLang, setContextLang } = useContext(LangContext)
    const {contextTheme,setContextTheme}=useContext(ThemeContext)
    // const [moviesList,setMoviesList]=useState([])
    // useEffect(()=>{
    // axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9dee35d33d48888bd478fed31c90d916')
    // .then((data)=> {
    //     let movieF=[]
    //     // console.log(data.data.results);
    //     movieF=data.data.results.map((movie)=>{
    //         // console.log(movie);
    //         movie.isFavourite=false
    //         return movie
    //     })
    //     // console.log(movieF);
    //     setMoviesList(movieF)
    // })
    // .catch((err)=> console.log(err))
    // },[])
    // console.log(moviesList);
    const moviesList = useSelector((state) => state.movieListR.movies)
    return (
        <div className={contextTheme=="dark"?"bg-dark":"bg-white"}>
            <div className="container text-center">
                    <h1 className={contextTheme=="dark"?"text-light text-center":"text-dark text-center"}>Movies</h1>
                <div className="text-center m-3 btn-group" role="group" aria-label="Basic example">
                    <button className="btn btn-danger text-center" onClick={() => setContextLang(contextLang == "ar" ? "en" : "ar")}> change Language</button>
                    <button className="btn btn-danger text-center" onClick={() => setContextTheme(contextTheme == "dark" ? "light" : "dark")}> change Theme</button>
                </div>
                    <div className="row">
                        {moviesList.map((movie) => <div key={movie.id} className="col-md-6 col-sm-12 col-lg-3"><MovieCard singleMovie={movie.id} /></div>)}
                    </div>
            </div>
        </div>
    )
}
export default MoviesList