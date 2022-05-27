import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>
      <div>
        <img src={props.profile.photos.large} alt="Foto of user"/>
      </div>
      <div>
        <h5>{props.profile.fullName}</h5>
        <h5>{props.profile.aboutMe}</h5>
      </div>

    </div>
  );
}

export default ProfileInfo;