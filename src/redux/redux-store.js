import { combineReducers, legacy_createStore } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
})

let store = legacy_createStore(reducers) 


export default store