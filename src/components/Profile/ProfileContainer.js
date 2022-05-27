import React from 'react';
import {connect} from "react-redux";
import {profileThunkCreator} from "../../redux/profile-reducer";




// https://social-network.samuraijs.com/api/1.0/profile/2

class ProfileContainer extends React.Component {
  componentDidMount() {
    // debugger;
    // const userId = this.props.match.params.id;
    // alert(this.props.location);

    this.props.profileThunkCreator();
    // profileAPI.getProfile().then(data => this.props.setUserProfile(data))
  }

  render() {
    return (
      <div><h1>ProfileContainer</h1></div>
        // <Profile {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {profileThunkCreator})(ProfileContainer);
