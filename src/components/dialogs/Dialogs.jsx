import item from './Dialogs.module.css';
import PersonItem from './persons/Persons';
import MessageItem from './messages/Messages';
import React from 'react';


const Dialog = (props) => {

   let personDataView = props.persons.map(item => <PersonItem name={item.name} id={item.id} />)
   let messageDataView = props.messages.map(item => <MessageItem message={item.message} id={item.id} />)

   let linkItem = React.createRef();

   const onAddMessage = () => {
      props.viewMessage();
   }

   const onChangeMessage = () => {
      let text = linkItem.current.value;
      props.changeMessage(text)
   }

   return (
      <div className={item.dialog}>
         <div className={item.persons}>
            {personDataView}
         </div>
         <div className={item.messages}>
            <div>
               {messageDataView}
            </div>
            <div className={item.form}>
               <textarea className={item.text_area} ref={linkItem} value={props.newMessageText} onChange={onChangeMessage} />
               <button className={item.button} onClick={onAddMessage}>View message</button>
            </div>
         </div>
      </div>
   )
}

export default Dialog;