import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  const newPostElement = React.createRef();

  const onAddPost = () => {
    // debugger;
    props.addPost();
  }

  const onPostChange = () => {
    // debugger;
    const text = newPostElement.current.value;
    props.updatePostText(text);
  }

  return (
    <div className={classes.my_posts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
        </div>
        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      { props.posts.map(el =>  <Post message={el.message} likesCount={el.likesCount} key={el.id}/>) }

      {/*<Post message='Hi, how are you?' />*/}
      {/*<Post message='It is my first post' />*/}
      {/*<Post message='Ok' />*/}
    </div>
  );
}

export default MyPosts;