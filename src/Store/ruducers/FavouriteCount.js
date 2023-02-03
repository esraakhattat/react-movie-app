
const InitialValues = {
    favouriteCount: 0
}

export default function FavouriteCountReducer(state = InitialValues,action){

    switch(action.type){
        case "ADD_TO_FAVOURITES":
            return{
                ...state,
                favouriteCount: state.favouriteCount+1 
            }
        case "REMOVE_FROM_FAVOURITES":
            return{
                ...state,
                favouriteCount: state.favouriteCount-1 
            }
        default: 
            return state

    }

}