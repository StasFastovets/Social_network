
const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likes: 5 },
      { id: 2, message: 'I want to see you!', likes: 3 },
      { id: 3, message: 'How old are you?', likes: 2 },
      { id: 4, message: 'You are great person :)', likes: 1 },
 ],
 newPostText: 'Hi, how are your?',
}

const profileReducer = (state = initialState, action) => { 
   switch (action.type) {
      case ADD_POST:
         let addOne = {
            id: 5,
            message: state.newPostText,
            likes: 0,
         }
         state.posts.push(addOne)
         state.newPostText = ''
         return state 
      case UPDATE_POST_TEXT:
         state.newPostText = action.text
         return state
      default:
         return state
   }
 }

 export const viewPostActionCreator = () => ({ type: ADD_POST })
 export const changePostActionCreator = (text) => ({ type: UPDATE_POST_TEXT, text: text }) // ЕСЛИ ВОЗВРАЩАЕМ ОБЕКТ, НУЖНЫ КРУГЛЫЕ СКОБКИ
 
 
 export default profileReducer