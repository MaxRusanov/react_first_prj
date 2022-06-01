import React from "react";
import {useNavigate} from 'react-router-dom';
import {connect} from "react-redux";



const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    const navigate = useNavigate();

    if (!props.isAuth) return navigate('/login', {replace: true});
    return <Component {...props} />
  }


  const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

  return ConnectedAuthRedirectComponent;
}