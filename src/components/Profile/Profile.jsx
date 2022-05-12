import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
// debugger;
  return (
    <div>
      <div className={classes.mainLogo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" alt="main img"/>
      </div>

      <ProfileInfo />

      <MyPosts
        posts={props.profileState.posts}
        newPostText={props.profileState.newPostText}
        dispatch={props.dispatch}
      />

    </div>
  );
}

export default Profile;