

import {CURRENCYCHANGE} from "../Action/Types";


const initialState={currency:"USD",}
export const coinReducer=(state=initialState,action)=>{

    switch(action.type){

        case CURRENCYCHANGE:{
            console.log("data")
            const newState={...state,currency:action.payload}
          return newState;
        }
        default:{
            return state
        }
    }
}