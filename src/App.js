import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MoviesList from './Pages/MoviesList/MovieList';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import NotFound from './Pages/NotFound';
import LogIn from './Pages/Auth/LogIn/LogIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Favourites from './Pages/Favourites/Favourites';
import { LangContext } from './Context/LangContext';
import { useState } from 'react';
import { ThemeContext } from './Context/ThemeContext';
function App() {
  const [contextLang, setContextLang] = useState('en')
  const [contextTheme, setContextTheme] = useState('dark')
  return (
    <ThemeContext.Provider value={{contextTheme, setContextTheme}}>
      <LangContext.Provider value={{ contextLang, setContextLang }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path={"/react-movie-app"} component={MoviesList}></Route>
            <Route exact path={"/signup"} component={SignUp}></Route>
            <Route exact path={"/login"} component={LogIn}></Route>
            <Route exact path={"/favourites"} component={Favourites}></Route>
            <Route exact path={"/movie/:id"} component={MovieDetails}></Route>
            <Route exact path={"*"} component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
