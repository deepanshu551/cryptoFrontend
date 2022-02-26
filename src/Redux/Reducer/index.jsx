
import {coinReducer} from "./CoinReducer";
import {userReducer} from "./UserReducer";
import  {combineReducers} from "redux";

export default combineReducers({

    coinReducer,
    userReducer
})