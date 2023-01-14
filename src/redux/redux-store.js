import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from './profile_reducer';
import dialogsReducer from './dialogs_reducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";      // промежуточный уровень
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer';


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store

