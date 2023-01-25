import { AuthAC } from './authReducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
   initialized: false,
}

const appReducer = (state = initialState, action) => {

   let _state

   switch (action.type) {
      case INITIALIZED_SUCCESS:
         _state = {
            ...state,
            initialized: true,
         }
         return _state
      default:
         return state
   }
}


export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS, })

export const InitializeApp = () => (dispatch) => {
   let promise = dispatch(AuthAC())
   // let promise = dispatch(somethingElse())
   // let promise = dispatch(somethingElse2())
   // Promise.all([promise]).then(() => { dispatch(initializedSuccess()) }) выполняем все промиссы, потом then - урок 80, 25 минута
   promise.then(() => { dispatch(initializedSuccess()) })
}


export default appReducer
