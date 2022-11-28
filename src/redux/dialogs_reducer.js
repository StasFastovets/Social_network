
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'


let initialState = {
   persons: [
      { id: 1, name: 'Stanislav' },
      { id: 2, name: 'Kristina' },
      { id: 3, name: 'Ruslan' },
      { id: 4, name: 'Sergiy' },
      { id: 5, name: 'Oleksand' },
    ],
    messages: [
      { id: 1, message: 'Hello, how are you?' },
      { id: 2, message: 'My favorite job is programming' },
      { id: 3, message: 'I like to study very muchry' },
      { id: 4, message: 'Ben is going to do his homework' },
    ],
    newMessageText: '',
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let addMessage = {
            id: 5,
            message: state.newMessageText,
            likes: 0,
         }
         state.messages.push(addMessage)
         state.newMessageText = ''
         return state 
      case UPDATE_MESSAGE_TEXT:
         state.newMessageText = action.value
         return state
      default:
         return state
   }
}


export const viewMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const changeMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, value: text })


export default dialogsReducer