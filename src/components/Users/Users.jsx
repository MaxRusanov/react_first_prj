import React from 'react';
import st from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import {NavLink} from "react-router-dom";

const Users = (props) => {
  // debugger;
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
    if (i < 50) { // !!! Ограничение, чтобы поместилось не более 50-элементов (ссылок по page)
      pages.push(i + 1);
    } else break;
  }


  return (
    <div>
      <div>
        {pages.map(p => {
            return (
              <span
                className={props.currentPage === p && st.selectedPage}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}
              >&nbsp;{p}&nbsp;</span>
            );
        })}
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