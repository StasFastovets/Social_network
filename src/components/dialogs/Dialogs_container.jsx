
import { changeMessageActionCreator, viewMessageActionCreator } from '../../redux/dialogs_reducer';
import React from 'react';
import Dialog from './Dialogs';


const DialogsContainer = (props) => {

   const viewMessage = () => {
      props.dispatch(viewMessageActionCreator());
   }

   const changeMessage = (text) => {
      let actionCreator = changeMessageActionCreator(text)
      props.dispatch(actionCreator);
   }

   return (
      <Dialog persons={props.store.messagesPage.persons}
         messages={props.store.messagesPage.messages}
         newMessageText={props.store.messagesPage.newMessageText}
         changeMessage={changeMessage}
         viewMessage={viewMessage} />
   )
}

export default DialogsContainer;