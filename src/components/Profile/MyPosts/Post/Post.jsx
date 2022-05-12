import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <h4>{ props.message }</h4>
      </div>
      <div>
       <h5>Like: {props.likesCount}</h5>
      </div>
    </div>
  );
}

export default Post;