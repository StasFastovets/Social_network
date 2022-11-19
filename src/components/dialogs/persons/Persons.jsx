import { NavLink } from 'react-router-dom';
import item from './../Dialogs.module.css';

const PersonItem = (props) => {
   let path = "/dialogs/" + props.id
   return (
      <div className={item.body}>
         <li className={item.person}>
            <NavLink className={itemData => itemData.isActive ? `${item.active} + ${item.person_active}` : item.link} to={path}>
               {props.name}
            </NavLink>
         </li>
      </div>
      
   )
}

export default PersonItem;