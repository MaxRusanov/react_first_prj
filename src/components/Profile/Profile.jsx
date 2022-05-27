import React,  {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {profileThunkCreator} from "../../redux/profile-reducer";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
// debugger;
  const params = useParams();


  useEffect(() => {
    // alert(params.id);
    props.profileThunkCreator(params.id);
  });

  return (
    <div>
      <div className={classes.mainLogo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" alt="main img"/>
      </div>

      <ProfileInfo profile={props.profile} />

      <MyPostsContainer store={props.store} />

    </div>
  );
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {profileThunkCreator})(Profile);