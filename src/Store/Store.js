import {createStore,applyMiddleware} from "redux"
// import Reducer from "./Reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import CompineReducers from "./ruducers/CompineReducers";

const store = createStore(CompineReducers, composeWithDevTools(applyMiddleware(thunk)))


export default store;