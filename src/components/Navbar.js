import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { LangContext } from "../Context/LangContext"
import { ThemeContext } from "../Context/ThemeContext"
import { getMoviesList } from "../Store/actions/MovieAction"
function Navbar() {
    const {contextLang,setContextLang}=useContext(LangContext)
    const {contextTheme,setContextTheme}=useContext(ThemeContext)
    const dispatch = useDispatch()
    useEffect(()=>{
                dispatch(getMoviesList(contextLang))
            },[contextLang])
    const favCount = useSelector((state) => state.favCountR.favouriteCount)
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Movies</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className="btn text-light" onClick={()=>setContextTheme(contextTheme=="dark"?"light":"dark")} ><i className="fa-solid fa-circle-half-stroke"></i></span>
                            </li>
                            <li className="nav-item">
                                <span className="btn text-light" onClick={()=>setContextLang(contextLang=="ar"?"en":"ar")} > {contextLang}</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Log In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link position-relative" to="/favourites"><i className="fa-solid fa-star"></i>
                                { favCount? <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-warning">
                                    {favCount}
                                </span>:null}
                                </Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar