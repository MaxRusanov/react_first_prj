let rerenderEntireTree = () => {}

const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It is my first post', likesCount: 2},
      {id: 3, message: 'Ok', likesCount: 5},
    ],
    newPostText: '',
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
    ]
  }
};

export const updatePostText = (newText) => {
  debugger;
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addPost = () => {
  let len = state.profilePage.posts.length + 1;
  const newPost = {
    id: len,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;