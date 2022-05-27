import React from "react";
import {connect} from "react-redux";
import {
  toggleFollowingProgress,
  toggleIsFetching, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
  componentDidMount() {
    // debugger;
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    // debugger;
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
  }

  render() {
    // debugger;
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          {...this.props}

          onPageChanged={this.onPageChanged} //callback-функция в нашей классовой компоненте
        />
      </div>
    );
  }

}

//---------------------------------------
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    folowingInProgress: state.usersPage.folowingInProgress,
  };
}


export default connect(mapStateToProps, {
  toggleIsFetching, toggleFollowingProgress,
  getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
})(UsersContainer);