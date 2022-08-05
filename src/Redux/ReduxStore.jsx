import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {MessagesReducer} from "./MessagesReducer";
import {NavBarReducer} from "./NavBarReducer";

let reducers = combineReducers(
    {
     profilePage:ProfileReducer,
     messagesPage:MessagesReducer,
     NavBar: NavBarReducer
    });

 let store = createStore(reducers);

 export default store;