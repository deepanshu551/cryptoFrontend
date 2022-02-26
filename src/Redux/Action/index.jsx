import {CURRENCYCHANGE,LOGIN,LOGOUT,SHOWALERT,HIDEALERT,REGISTER} from "./Types";



export const changeCurrency=(currency)=>{
console.log("changeCurrency")
    return {type:CURRENCYCHANGE,payload:currency}
}


export const userLogin=(user)=>{
    return {type:LOGIN,payload:user}
}
export const userLogout=()=>{
    console.log("ACtion logout")
    return {type:LOGOUT}
}
export const userRegister=(user)=>{
    console.log(" action register")
    return {type:REGISTER,payload:user}
}

export const showAlert=(alertData)=>{
    console.log("shoeAlert",alertData)
    return {type:SHOWALERT,payload:alertData}
}

export const hideAlert=()=>{
    console.log("hide")
    return {type:HIDEALERT}
}