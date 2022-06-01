import React, {useEffect, useState} from 'react';

// import s from './ProfileInfo.module.css';
// Ваш ID: 24196

const ProfileStatusHook = (props) => {
  // debugger;
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  useEffect(() => {
    // debugger;
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {!editMode &&
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || '---No-status---'}</span>
        </div>
      }
      {editMode &&
        <div>
          <input
            value={status}
            type="text"
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            autoFocus={true}
          />
        </div>
      }
    </div>
  )
}

export default ProfileStatusHook;