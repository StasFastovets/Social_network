import React from 'react';
import elem from './Users.module.css';
import usersPhoto from "../../logo/images.jfif";
import Preloader from './../common/preloader/preloader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { deleteUnfollowUser, postFollowUser } from '../../API/api';
import { toggleFollowingAC } from './../../redux/usersReducer';


const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)                        // количество страниц, ceil - округляет в большую сторону
   let pages = []                                                                            // массив страниц
   for (let i = 1; i <= pagesCount; i++) {                                                   //  for (let i = 1; i <= pagesCount; i++) {        
      pages.push(i)
   }

   return (
      <div className={elem.body}>
         <div className={elem.container}>
            <div className={elem.caption}>Users</div>
            <div className={elem.loader}>{props.isFetching ? <Preloader /> : null}</div>
            <div className={elem.pages}>{pages.map(p => {
               return <span onClick={() => props.onPageChanget(p)} className={props.currentPage === p ? elem.currentPage : elem.page}>{p}</span>
            })}</div>
            <div className={elem.users}>
               {
                  props.users.map(item => <div className={elem.user} key={item.id}>
                     <div className={elem.info}>
                        <NavLink to={'/profile/' + item.id}>
                           <img src={item.photos.small != null ? item.photos.small : usersPhoto} alt="smile" className={elem.img}></img>
                        </NavLink>
                        {item.followed ?
                           <button disabled={props.followingInProgress.some(id => id === item.id)} className={elem.button} 
                              onClick= { () => {props.unfollowUserThunk(item.id)} }        
                           >FOLLOW</button> :
                           <button disabled={props.followingInProgress.some(id => id === item.id)} className={elem.button} 
                              onClick={ () => {props.followUserThunk(item.id)} }
                           >UNFOLLOW</button>}
                     </div>
                     <div className={elem.text}> 
                        <div className={elem.text_left}>
                           <div className={elem.name}>{item.name}</div>
                           <div className={elem.status}>{item.status}</div>
                        </div>
                        <div className={elem.text_right}>
                           <div className={elem.country}>{'item.location.country'}</div>
                           <div className={elem.city}>{'item.location.city'}</div>
                        </div>
                     </div>
                  </div>)
               }
            </div>
         </div>
      </div >
   )
}



export default Users;

