import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusHook from "./ProfileStatusHook";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={s.content}>

      <img src={props.profile.photos.large} alt="Foto of user"/>
      {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus} />*/}
      <ProfileStatusHook status={props.status} updateStatus={props.updateStatus} />

      {/*<h5>{props.profile.fullName}</h5>*/}
      {/*<h5>{props.profile.aboutMe}</h5>      */}

    </div>
  );
}

export default ProfileInfo;