import { useSelector } from "react-redux"
import FavouriteCard from "./FavouriteCard"
import wish from "../../images/location-pin.png"
import './Favourite.css'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../../Context/ThemeContext"
function Favourites() {
    const {contextTheme,setContextTheme}=useContext(ThemeContext)

    let favouritesList = useSelector((state) => state.favR.favourites)
    console.log(favouritesList.length);
    return (
        <div className={`${contextTheme=="light"?"bg-white":"bg-dark"} ${favouritesList.length<=4?"background":null}`}>
            <div className="container">
                <div className="row">
                    {
                    favouritesList.length!=0? favouritesList.map((movie) => <div key={movie.id} className="col-md-6 col-sm-12 col-lg-3"><FavouriteCard favouriteMovie={movie.id} /></div>):<div className="text-center margin col-6"><img className="img-f" src={wish}/><h3 className={contextTheme=="dark"?"text-light mt-3":"text-dark mt-3"}>No Movies added to Favourites</h3>
                    <Link to='/react-movie-app' ><span className="mt-3 btn btn-danger">Go To Home Page</span></Link>
                    </div>
                    
                    }
                </div>
            </div>
        </div>)
}
export default Favourites