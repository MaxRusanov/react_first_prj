import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMW from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});


let store = createStore(reducers, applyMiddleware(thunkMW));

window.store = store; // Сохранили ссылку на store глобально и в консоли можно будет наблюдать за ним

export default store;