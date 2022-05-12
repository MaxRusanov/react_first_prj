import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 2},
        {id: 3, message: 'Ok', likesCount: 5},
      ],
      newPostText: 'it-samasutra',
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Max'},
        {id: 2, name: 'Elena'},
        {id: 3, name: 'Alina'},
        {id: 4, name: 'Max_1'},
        {id: 5, name: 'Elena_1'},
        {id: 6, name: 'Alina_1'},
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
      ],
      newMessage: '',
    }
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    // action - то объект { type: 'ADD-POST', ...}
    // debugger;

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  },

}

export default store;