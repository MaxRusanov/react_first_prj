import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to='/profile' className={({ isActive }) => (isActive ? classes.activeLink : '')}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialogs' className={({ isActive }) => (isActive ? classes.activeLink : '')}>Message</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/users' className={({ isActive }) => (isActive ? classes.activeLink : '')}>Users</NavLink>
      </div>
      <div className={classes.item}>
        {/*<a>Music</a>*/}
      </div>

    </nav>
  );
}

export default Navbar;