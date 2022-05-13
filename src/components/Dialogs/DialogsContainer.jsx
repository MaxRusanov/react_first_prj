import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//   debugger;
//   const state = props.store.state.messagesPage;
//
//   const onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text));
//   }
//
//   const addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   }
//
//
//
//   return (
//     <Dialogs
//       addMessage={addMessage}
//       updateMessageText={onMessageChange}
//       newMessage={state.newMessage}
//       messages={state.messages}
//       dialogs={state.dialogs}
//     />
//   );
// }
// export default DialogsContainer;



const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    dialogs: state.messagesPage.dialogs,
    newMessage: state.messagesPage.newMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => {
      const action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      const action = addMessageActionCreator();
      dispatch(action);
    },
  }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;
