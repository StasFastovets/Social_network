import { combineReducers, legacy_createStore } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from "./usersReducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
})

let store = legacy_createStore(reducers)

window.store = store

export default store

