import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthThunkCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthThunkCreator();
  }

  render() {
    return <Header {...this.props} />
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});


export default connect(mapStateToProps, {getAuthThunkCreator})(HeaderContainer);