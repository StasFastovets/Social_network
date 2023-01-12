import { getAuth, logIn } from "../API/api"
import { getProfileOfUser, logOut } from './../API/api';


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
            email: action.payload.email,
            id: action.payload.id,
            login: action.payload.login,
            isAuth: action.payload.isAuth,
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


export const setUserDataAC = (email, id, login, isAuth) => ({ type: SET_USER_DATA, payload: { email, id, login, isAuth } })
export const setUserPhotoAC = (photo) => ({ type: SET_USER_PHOTO, photo })

export const AuthAC = () => {
   return (
      (dispatch) => {
         getAuth().then(data => {
            if (data.resultCode === 0) {
               let email = data.data.email
               let id = data.data.id
               let login = data.data.login
               dispatch(setUserDataAC(email, id, login, true))

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


export const LogInAC = (login, password, rememberMe) => (dispatch) => {
   logIn(login, password, rememberMe).then(
      data => {
         if (data.resultCode == 0) {
            dispatch(AuthAC())
         }
      }
   )
}

export const LogOutAC = () => (dispatch) => {
   logOut().then(
      data => {
         if (data.resultCode == 0) {
            dispatch(setUserDataAC(null, null, null, false))
         }
      }
   )
}

export default authReducer
