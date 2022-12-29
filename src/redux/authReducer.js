import { getAuth } from "../API/api"
import { getProfileOfUser } from './../API/api';


const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'

let initialState = {
   email: null,
   id: null,
   login: null,
   isAuth: false,
   photo: null,
}

const authReducer = (state = initialState, action) => {

   let _state

   switch (action.type) {
      case SET_USER_DATA:
         _state = {
            ...state,
            email: action.data.email,
            id: action.data.id,
            login: action.data.login,
            isAuth: true,
         }
         return _state
      case SET_USER_PHOTO:
         _state = {
            ...state,
            photo: action.photo,
         }
         return _state
      default:
         return state
   }
}


export const setUserDataAC = (email, id, login) => ({ type: SET_USER_DATA, data: { email, id, login } })
export const setUserPhotoAC = (photo) => ({ type: SET_USER_PHOTO, photo })

export const AuthAC = () => {
   return (
      (dispatch) => {
         getAuth().then( data => {
            if (data.resultCode === 0) {
               let email = data.data.email
               let id = data.data.id
               let login = data.data.login
               dispatch(setUserDataAC(email, id, login))
   
               getProfileOfUser(data.data.id).then(data => {
                  if (data.photos.large != null) {
                     let photo = data.photos.large
                     dispatch(setUserPhotoAC(photo))
                  }
               })
                  
            }
         }) 
      }
   )
}

export default authReducer
