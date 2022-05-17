import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'



const Dialogs = (props) => {
// debugger;
  const newMessageElement = React.createRef();

  const onMessageChange = () => {
    // debugger;
    const text = newMessageElement.current.value;
    props.updateMessageText(text);
  }

  const onAddMessage = () => {
    props.addMessage();
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        {props.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id} />)}

        {/*<DialogItem name='Max' id='1' />*/}
        {/*<DialogItem name='Elena' id='2' />*/}
        {/*<DialogItem name='Alina' id='3' />*/}
      </div>
      <div className={css.messages}>
        <div>
          <div>
            <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange} />
          </div>
          <div>
            <button onClick={onAddMessage}>Add message</button>
            <hr/>
          </div>
        </div>
        <div>
          {props.messages.map(el => <Message message={el.message} key={el.id} />)}

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