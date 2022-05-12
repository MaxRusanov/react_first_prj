import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route} from "react-router-dom";

const App = (props) => {
  // debugger;
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            {/*<Route path='/'*/}
            {/*       element={}*/}
            {/*/>*/}

            <Route path='/profile' element={
              <Profile
                profileState={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }/>
            <Route
              path='/dialogs'
              element={<Dialogs
                messagesState={props.state.messagesPage}
                dispatch={props.dispatch}
              />}
            />
          </Routes>
        </div>
      </div>
  );
}
export default App;