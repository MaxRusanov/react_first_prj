import React from 'react';
import css from './../Dialogs.module.css';


const Message = (props) => {
  // debugger;
  return (
    <div className={css.message}>
      <div>
        { props.message }
      </div>

    </div>
  );
}


export default Message;