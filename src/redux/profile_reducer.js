
const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likes: 5 },
      { id: 2, message: 'I want to see you!', likes: 3 },
      { id: 3, message: 'How old are you?', likes: 2 },
      { id: 4, message: 'You are great person :)', likes: 1 },
   ],
   newPostText: 'Hi, how are your?',
   profile: null,
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
         _state = { ...state,
                     posts: [...state.posts, addOne],
                     newPostText: ''
                  }
         return _state
      case UPDATE_POST_TEXT:
         _state = { ...state,
            newPostText: action.value }
         return _state
      case SET_USER_PROFILE:
         _state = { ...state,
            profile: action.profile }
         return _state
      default:
         return state
   }
}

export const viewPostActionCreator = () => ({ type: ADD_POST })
export const changePostActionCreator = (text) => ({ type: UPDATE_POST_TEXT, value: text }) // ЕСЛИ ВОЗВРАЩАЕМ ОБЕКТ, НУЖНЫ КРУГЛЫЕ СКОБКИ
export const setUserProfileAC = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer