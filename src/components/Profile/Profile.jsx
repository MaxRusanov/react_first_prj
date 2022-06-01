import React,  {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getStatusThC, profileThunkCreator, updateStatusThC} from "../../redux/profile-reducer";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const Profile = (props) => {
// debugger;
  const params = useParams();


  useEffect(() => {
    // alert(params.id);
    if (!params.id) {
      params.id = 2;
    }
    props.profileThunkCreator(params.id);
    props.getStatusThC(params.id);
  });

  return (
    <div>
      <div className={classes.mainLogo}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU" alt="main img"/>
      </div>

      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatusThC}
      />

      <MyPostsContainer store={props.store} />

    </div>
  );
}

// const AuthRedirectComponent = withAuthRedirect(Profile);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

// export default connect(mapStateToProps, {profileThunkCreator})(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, {profileThunkCreator, getStatusThC, updateStatusThC}),
  // withAuthRedirect
)(Profile)