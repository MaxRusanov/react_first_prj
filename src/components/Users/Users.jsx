import React from 'react';
import st from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";

const Users = (props) => {
  // debugger;

  return (
    <div>
      <div>
        <Paginator
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChenged={props.onPageChanged}
        />
      </div>
      <div>
        {props.users.map((u) => (
          <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small !== null
                  ? u.photos.small
                  : userPhoto
                } alt="avatar" className={st.userPhoto}/>
              </NavLink>
            </div>
            <div>
              {u.followed
                ? <button disabled={props.folowingInProgress.some(id => id === u.id)} onClick={() => {
                  props.unfollowThunkCreator(u.id);
                }}>UnFollow</button>
                : <button disabled={props.folowingInProgress.some(id => id === u.id)} onClick={() =>{
                  props.followThunkCreator(u.id);
                }}>Follow</button>}
            </div>
          </span>
            <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/*<div>{u.location.country}</div>*/}
              {/*<div>{u.location.city}</div>*/}
            </span>
          </span>
          </div>))}
      </div>
    </div>
  );
}

export default Users;