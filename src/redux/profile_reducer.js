import { getProfileOfUser, getStatusOfUser, updateStatusOfUser } from './../API/api';

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likes: 5 },
      { id: 2, message: 'I want to see you!', likes: 3 },
      { id: 3, message: 'How old are you?', likes: 2 },
      { id: 4, message: 'You are great person :)', likes: 1 },
   ],
   newPostText: 'Hi, how are your?',
   profile: null,
   status: '',
}

const profileReducer = (state = initialState, action) => {

   let _state

   switch (action.type) {
      case ADD_POST:
         let addOne = {
            id: 5,
            message: state.newPostText,
            likes: 0,
         }
         _state = {
            ...state,
            posts: [...state.posts, addOne],
            newPostText: ''
         }
         return _state
      case UPDATE_POST_TEXT:
         _state = {
            ...state,
            newPostText: action.value
         }
         return _state
      case SET_USER_PROFILE:
         _state = {
            ...state,
            profile: action.profile
         }
         return _state
      case SET_STATUS:
         _state = {
            ...state,
            status: action.status
         }
         return _state
      default:
         return state
   }
}

export const viewPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (text) => ({ type: UPDATE_POST_TEXT, value: text }) // ЕСЛИ ВОЗВРАЩАЕМ ОБЕКТ, НУЖНЫ КРУГЛЫЕ СКОБКИ
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatusAC = (status) => ({ type: SET_STATUS, status })

export const getProfileOfUserAC = (userID) => {
   return (
      (dispatch) => {
         getProfileOfUser(userID).then(data => {
            dispatch(setUserProfileAC(data))
         })
      }
   )
}

export const getStatusOfUserAC = (userId) => {
   return (
      (dispatch) => {
         getStatusOfUser(userId).then(data => {
            dispatch(setStatusAC(data))
         })
      }
   )
}

export const updateStatus = (status) => {
   return (
      (dispatch) => {
         updateStatusOfUser(status).then(data => {
            if (data.resultCode === 0) {
               dispatch(setStatusAC(status))
            }
         })
      }
   )
}

export default profileReducer

