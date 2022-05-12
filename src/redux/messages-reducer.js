const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const len = state.messages.length + 1;
      const newMessage = {
        id: len,
        message: state.newMessage
      };
      state.messages.push(newMessage);
      state.newMessage = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessage = action.newText;
      return state;
    default:
      return state;
  }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
});

export default messagesReducer;