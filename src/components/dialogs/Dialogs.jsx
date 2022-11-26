import { NavLink } from 'react-router-dom';
import item from './Dialogs.module.css';
import PersonItem from './persons/Persons';
import MessageItem from './messages/Messages';
import { changeMessageActionCreator, viewMessageActionCreator } from '../../redux/dialogs_reducer';
import React from 'react';


const Dialog = (props) => {

   let personDataView = props.person.persons.map(item => <PersonItem name={item.name} id={item.id} />)
   let messageDataView = props.person.messages.map(item => <MessageItem message={item.message} id={item.id} />)

   let linkItem = React.createRef();

   const viewMessage = () => {
      props.dispatch(viewMessageActionCreator());
   }

   const changeMessage = () => {
      let text = linkItem.current.value;
      let actionCreator = changeMessageActionCreator(text)
      props.dispatch(actionCreator);
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
               <textarea className={item.text_area} ref={linkItem} value={props.person.newMessageText} onChange={changeMessage} />
               <button className={item.button} onClick={viewMessage}>View message</button>
            </div>
         </div>
      </div>
   )
}

export default Dialog;