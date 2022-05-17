import React from 'react';
import st from './Users.module.css';

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1, photoUrl: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
        followed: false, fullName: 'Max', status: 'I am a boos', location: {city: 'Kemerovo', country: 'RF'}
      },
      {
        id: 2, photoUrl: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
        followed: true, fullName: 'Sasha', status: 'I am a boos', location: {city: 'Moscov', country: 'RF'}
      },
      {
        id: 3, photoUrl: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
        followed: false, fullName: 'Dmitry', status: 'I am a boos', location: {city: 'Minsk', country: 'Belarus'}
      },
      {
        id: 4, photoUrl: 'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg',
        followed: true, fullName: 'Sergei', status: 'I am a boos', location: {city: 'Tula', country: 'RF'}
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="avatar" className={st.userPhoto}/>
            </div>
            <div>
              {u.followed
                ? <button onClick={() => props.unfollow(u.id)}>UnFollow</button>
                : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>))}
    </div>
  );
}

export default Users;