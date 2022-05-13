import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//   debugger;
//   const state = props.store.state.profilePage;
//
//   const addPost = () => {
//     // debugger;
//     props.store.dispatch(addPostActionCreator());
//   }
//
//   const onPostChange = (text) => {
//     // debugger;
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   }
//
//   return (
//     <MyPosts
//       posts={state.posts}
//       newPostText={state.newPostText}
//       updatePostText={onPostChange}
//       addPost={addPost}
//     />);
// }
//
// export default MyPostsContainer;

// debugger;

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      const action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      const action = addPostActionCreator();
      dispatch(action);
    },
  }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;
