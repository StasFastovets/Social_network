import React from 'react';
import elem from './Users.module.css';
import usersPhoto from "../../logo/images.jfif";
import { NavLink } from 'react-router-dom';


const User = ({user, ...props}) => {
   return (
      <div className={elem.user} key={user.id}>
         <div className={elem.info}>
            <NavLink to={'/profile/' + user.id}>
               <img src={user.photos.small != null ? user.photos.small : usersPhoto} alt="smile" className={elem.img}></img>
            </NavLink>
            {user.followed ?
               <button disabled={props.followingInProgress.some(id => id === user.id)} className={elem.button}
                  onClick={() => { props.unfollowUserThunk(user.id) }}
               >FOLLOW</button> :
               <button disabled={props.followingInProgress.some(id => id === user.id)} className={elem.button}
                  onClick={() => { props.followUserThunk(user.id) }}
               >UNFOLLOW</button>}
         </div>
         <div className={elem.text}>
            <div className={elem.text_left}>
               <div className={elem.name}>{user.name}</div>
               <div className={elem.status}>{user.status}</div>
            </div>
            <div className={elem.text_right}>
               <div className={elem.country}>{'user.location.country'}</div>
               <div className={elem.city}>{'user.location.city'}</div>
            </div>
         </div>
      </div>)
}



export default User;

