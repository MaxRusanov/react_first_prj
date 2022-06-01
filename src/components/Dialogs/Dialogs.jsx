import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Form, Field} from 'react-final-form';


const Dialogs = (props) => {
// debugger;

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
          <DialogForm />
          <hr/>
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

const onSubmit = (data) => {
  // props.updateMessageText(data.textMessage);
}

const DialogForm = () => (
  <Form
    onSubmit={onSubmit}
    // initialValues={({ textMessage: 'AAA' })}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="textMessage" component="textarea" placeholder="Введите текст"/>
        </div>
        <div>
          <button type="submit">Добавить</button>
        </div>
      </form>
    )}
  />
)

export default Dialogs;