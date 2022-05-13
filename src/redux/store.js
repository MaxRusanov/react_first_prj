import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
});


let store = createStore(reducers);

window.store = store; // Сохранили ссылку на store глобально и в консоли можно будет наблюдать за ним

export default store;