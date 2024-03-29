import { deleteUnfollowUser, getUsers, postFollowUser } from './../API/api';


const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_USER = 'users/SET_USER'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'
const SET_ALL_USERS = 'users/SET_ALL_USERS'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
   users: [],
   pageSize: 100,                 // количество пользователей на странице
   totalUsersCount: 0,            // количество всех пользователей, приходят из сервера 
   currentPage: 1,                // текущая страница
   isFetching: false,             // отображение полосы загрузки
   followingInProgress: [],       // 
   portionSize: 10,               // количество порций(страничек)
}

const usersReducer = (state = initialState, action) => {

   let _state

   switch (action.type) {
      case FOLLOW:
         _state = {
            ...state,
            users: state.users.map(item => {
               if (item.id === action.userID) {
                  return { ...item, followed: true }
               }
               return item
            })
         }
         return _state
      case UNFOLLOW:
         _state = {
            ...state,
            users: state.users.map(item => {
               if (item.id === action.userID) {
                  return { ...item, followed: false }
               }
               return item
            })
         }
         return _state
      case SET_USER:
         _state = { ...state, users: [...action.users] }
         return _state
      case SET_CURRENT_PAGE:
         _state = { ...state, currentPage: action.page }
         return _state
         debugger
      case SET_ALL_USERS:
         _state = { ...state, totalUsersCount: action.users }
         return _state
      case TOGGLE_IS_FETCHING:
         _state = { ...state, isFetching: action.isFetching }
         return _state
      case TOGGLE_IS_FOLLOWING_PROGRESS:
         _state = {
            ...state,
            followingInProgress: action.isFetching ?
               [...state.followingInProgress, action.userID] :
               state.followingInProgress.filter(id => id != action.userID)
         }
         return _state
      default:
         return state
   }
}


export const followActionCreator = (userID) => ({ type: FOLLOW, userID })
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersActionCreator = (users) => ({ type: SET_USER, users })
export const setCurrentPageActionCreator = (page) => ({ type: SET_CURRENT_PAGE, page: page })
export const setAllUsersActionCreator = (users) => ({ type: SET_ALL_USERS, users })
export const setIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgressAC = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID })

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (
      (dispatch) => {
         dispatch(setIsFetchingAC(true))
         getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersActionCreator(data.items))
            dispatch(setAllUsersActionCreator(data.totalCount))
            dispatch(setIsFetchingAC(false))
         })
      }
   )
}

export const unfollowUserThunkCreator = (userID) => {
   return (
      (dispatch) => {
         dispatch(toggleFollowingProgressAC(true, userID))
         deleteUnfollowUser(userID).then(data => {
            if (data.resultCode === 0) {
               dispatch(unfollowActionCreator(userID))
            }
            dispatch(toggleFollowingProgressAC(false, userID))
         })
      }
   )
}

export const followUserThunkCreator = (userID) => {
   return (
      (dispatch) => {
         dispatch(toggleFollowingProgressAC(true, userID))
         postFollowUser(userID).then(data => {
            if (data.resultCode === 0) {
               dispatch(followActionCreator(userID))
            }
            dispatch(toggleFollowingProgressAC(false, userID))
         })
      }
   )
}

export default usersReducer
