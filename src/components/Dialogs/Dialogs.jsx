import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {updateNewMessageTextActionCreator, addMessageActionCreator} from "../../myRedux/messages-reducer";


const Dialogs = (props) => {
// debugger;
  const newMessageElement = React.createRef();

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  }

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {props.messagesState.dialogs.map(el => <DialogItem name={el.name} id={el.id} onChange={onMessageChange} />)}

        {/*<DialogItem name='Max' id='1' />*/}
        {/*<DialogItem name='Elena' id='2' />*/}
        {/*<DialogItem name='Alina' id='3' />*/}
      </div>
      <div className={css.messages}>
        <div>
          <textarea ref= {newMessageElement} value={props.messagesState.newMessage} onChange={onMessageChange} />
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
          <hr/>
        </div>
        <div>
          {props.messagesState.messages.map(el => <Message message={el.message} />)}

        {/*<Message message='Hi' />*/}
        {/*<Message message='How are you' />*/}
        {/*<Message message='Yo' />*/}
        {/*<Message message='Yo' />*/}
        {/*<Message message='Yo' />*/}
        </div>
      </div>
    </div>
  );
}

export default Dialogs;