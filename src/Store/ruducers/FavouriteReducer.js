
const InitialValues = {
    favourites:[]
}

export default function FavouriteReducer(state = InitialValues, action){
    // case "EDIT_SINGLE_MOVIE":
    //     const movie = state.movies.find(
    //         (singleMovie) => singleMovie.id == action.payload.id
    //     );
    //     const movieIndex=state.movies.indexOf(movie)
    //     state.movies[movieIndex]=action.payload
    //     // console.log(state);
    //     return state
    switch(action.type){
        case "ADD_OR_REMOVE_FAVOURITE":
            console.log(action.payload);
            return{
                ...state,
                favourites: (action.payload.isFavourite?[...state.favourites,action.payload]:state.favourites.filter((el)=>el.id!=action.payload.id) )
            }
        default: 
            return state

    }

}