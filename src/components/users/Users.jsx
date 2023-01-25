import React from 'react';
import elem from './Users.module.css';
import Preloader from './../common/preloader/preloader';
import Paginator from '../common/paginator/Paginators';
import User from './User';


const Users = ({ totalUsersCount, pageSize, onPageChanget, currentPage, ...props }) => {
   return (
      <div className={elem.body}>
         <div className={elem.container}>
            <div className={elem.caption}>Users</div>
            <div className={elem.loader}>{props.isFetching ? <Preloader /> : null}</div>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanget={onPageChanget} currentPage={currentPage} />
            <div className={elem.users}>
               {
                  props.users.map(user => <User user={user}
                                                followingInProgress={props.followingInProgress}
                                                unfollowUserThunk={props.unfollowUserThunk}
                                                followUserThunk={props.followUserThunk}/> )
               }
            </div>
         </div>
      </div >
   )
}



export default Users;

