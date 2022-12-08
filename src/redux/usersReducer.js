
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USER = 'SET_USER'


let initialState = {
   users: [],
   pageSize: 5,   // количество пользователей на странице
   totalUsersCount: 0, // количество всех пользователей, приходят из сервера 
}

const usersReducer = (state = initialState, action) => {

   let _state

   switch (action.type) {
      case FOLLOW:
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
      case UNFOLLOW:
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
      case SET_USER:
         _state = { ...state, users: [ ...action.users] }
         return _state
      default:
         return state
   }
}


export const followActionCreator = (userID) => ({ type: FOLLOW, userID })
export const unfollowActionCreator = (userID) => ({ type: UNFOLLOW, userID })
export const setUsersActionCreator = (users) => ({ type: SET_USER, users })

export default usersReducer