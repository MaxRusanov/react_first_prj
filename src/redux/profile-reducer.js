const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 2},
    {id: 3, message: 'Ok', likesCount: 5},
  ],
  newPostText: 'Hi',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      const len = state.posts.length + 1;
      const newPost = {
        id: len,
        message: state.newPostText,
        likesCount: 0
      };
      let stateCopy = {...state}; //создаём поверхностную копию объекта state
      stateCopy.posts = [...state.posts]; //создаём глубокую копию в state объекта state.posts
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = {...state}; //создаём поверхностную копию объекта state
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});



export default profileReducer;