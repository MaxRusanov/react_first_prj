import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It is my first post', likesCount: 2},
    {id: 3, message: 'Ok', likesCount: 5},
  ],
  newPostText: 'Hi',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const len = state.posts[state.posts.length-1].id + 1;
      const newPost = {
        id: len,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
      // stateCopy.posts.push(newPost);
      // return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }; //создаём поверхностную копию объекта state
      // stateCopy.newPostText = action.newText;
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
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
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export const profileThunkCreator = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)))
  }
}


export default profileReducer;