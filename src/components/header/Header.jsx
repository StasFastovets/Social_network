import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from './../../logo/images.jfif'

const Header = (props) => {
   return (
      <div className={s.body}>
         <div className={s.header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0y5cErQjKsiIPCJ6JL2U0afZDvbi4p2zDbg&usqp=CAU" alt="#"></img>
            <div className={s.login_block}>
               {props.isAuth ?
                  <div>
                     <span className={s.login}> {props.login} </span>
                     <img className={s.photo} src={props.photo != null ? props.photo : userPhoto} alt=""></img>
                  </div> :
                  <NavLink className={s.login_link} to={'/Login'}>Login</NavLink>}
            </div>
         </div>
      </div>
   )
}

export default Header;