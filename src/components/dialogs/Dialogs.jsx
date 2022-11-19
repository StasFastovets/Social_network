import { NavLink } from 'react-router-dom';
import item from './Dialogs.module.css';
import PersonItem from './persons/Persons';
import MessageItem from './messages/Messages';

const Dialog = (props) => {

   let personDataView = props.person.map(item => <PersonItem name={item.name} id={item.id}/>)
   let messageDataView = props.message.map(item => <MessageItem message={item.message} id={item.id}/>)

   return (
      <div className={item.dialog}>
         <div className={item.persons}>
            {personDataView}
         </div>
         <div className={item.messages}>
            {messageDataView}
         </div>
      </div>
   )
}

export default Dialog;