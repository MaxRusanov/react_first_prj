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
    {id: 3, message: 'Yo1'},
  ],
  newMessageText: 'aaa'
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      // debugger;
      const len = state.messages[state.messages.length-1].id + 1;
      const myText = state.newMessageText;
      const newMessage = {
        id: len,
        message: myText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return  {
        ...state,
        newMessageText: action.newText,
      };
    }
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