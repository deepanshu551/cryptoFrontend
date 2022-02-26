import { LOGIN, LOGOUT, SHOWALERT, HIDEALERT,REGISTER } from '../Action/Types'
function fetchUserFromStorage () {
  let user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}
  return user
}
const initialState = { user: fetchUserFromStorage(), alertData: {} }

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem('user', JSON.stringify(action.payload))
      const newData = { ...state, user: action.payload }
      return newData
    }
    case LOGOUT: {
      localStorage.removeItem('user')
      return { ...state, user: {} }
    }
    case REGISTER:{
      console.log("reducer register")
      localStorage.setItem('user',JSON.stringify(action.payload));
const newData={...state,user:action.payload}
return newData;
    }
    case SHOWALERT: {
      console.log('showAlert', action.payload)
      return { ...state, alertData: { ...action.payload, show: true } }
    }
    case HIDEALERT: {
      console.log('hider')
      return { ...state, alertData: { ...state.alertData, show: false } }
    }
    default: {
      return state
    }
  }
}
