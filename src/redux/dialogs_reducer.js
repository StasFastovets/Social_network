const ADD_MESSAGE = 'ADD-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {

   let _state

   switch (action.type) {
      case ADD_MESSAGE:
         let addMessage = {
            id: 5,
            message: action.message,
            likes: 0,
         }
         _state = {
            ...state,
            messages: [...state.messages, addMessage],
         }
         return _state
      default:
         return state
   }
}


export const viewMessageActionCreator = (message) => ({ type: ADD_MESSAGE, message })


export default dialogsReducer