import { NavLink } from 'react-router-dom';
import item from './Dialogs.module.css';

const PersonItem = (props) => {
   let path = "/dialogs/" + props.id
   return (
      <li className={item.person}>
         <NavLink className={itemData => itemData.isActive ? `${item.active} + ${item.person_active}` : item.link} to={path}>
            {props.name}
         </NavLink>
      </li>
   )
}

const MessageItem = (props) => { 
   return <div className={item.message}>{props.message}</div>
 }

const Dialog = () => {
   let personData = [
      {id: 1, name: 'Stanislav'},
      {id: 2, name: 'Kristina'},
      {id: 3, name: 'Ruslan'},
      {id: 4, name: 'Sergiy'},
      {id: 5, name: 'Oleksand'},
   ]
   let messageData = [
      {id: 1, message: 'Hello, how are you?'},
      {id: 2, message: 'My favorite job is programming'},
      {id: 3, message: 'I like to study very muchry'},
      {id: 4, message: 'Ben is going to do his homework'},
   ]
   return (
      <div className={item.dialog}>
         <div className={item.persons}>
            <PersonItem name={personData[0].name} id={personData[0].id}/>
            <PersonItem name={personData[1].name} id={personData[1].id}/>
            <PersonItem name={personData[2].name} id={personData[2].id}/>
            <PersonItem name={personData[3].name} id={personData[3].id}/>
            <PersonItem name={personData[4].name} id={personData[4].id}/>
         </div>
         <div className={item.messages}>
            <MessageItem message={messageData[0].message} id={messageData[0].id}/>
            <MessageItem message={messageData[1].message} id={messageData[1].id}/>
            <MessageItem message={messageData[2].message} id={messageData[2].id}/>
            <MessageItem message={messageData[3].message} id={messageData[3].id}/>
         </div>
      </div>
   )
}

export default Dialog;