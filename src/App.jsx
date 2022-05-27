import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";


const App = (props) => {
  // debugger;
  return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/'
                   element={<div>Main route</div>}
            />

            {/*<Route path='/profile' element={*/}
            {/*  <ProfileContainer store={props.store} />*/}
            {/*}/>*/}
            <Route path='/profile/:id' element={
              <Profile store={props.store} />
            }/>

            <Route
              path='/dialogs'
              element={<DialogsContainer store={props.store} />}
            />
            <Route
              path='/users'
              element={<UsersContainer />}
            />

            <Route
              path='/login'
              element={<Login />}
            />
          </Routes>
        </div>
      </div>
  );
}
export default App;