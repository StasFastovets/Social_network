import axios from 'axios';
import React  from 'react';
import elem from './Users.module.css';
import usersPhoto from "../../logo/images.jfif"


class Users extends React.Component {
   constructor(props) {
      super(props)
   }

   componentDidMount() {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {this.props.addUsers(response.data.items)})
   }

   render() {
      return (
         <div className={elem.body}>
            <div className={elem.container}>
               <div className={elem.caption}>Users</div>
               <div className={elem.users}>
                  {
                     this.props.users.map(item => <div className={elem.user} key={item.id}>
                        <div className={elem.info}>
                           <img src={item.photos.small != null ? item.photos.small : usersPhoto} alt="smile" className={elem.img}></img>
                           {item.followed ?
                              <button className={elem.button} onClick={() => this.props.followUser(item.id)}>FOLLOW</button> :
                              <button className={elem.button} onClick={() => this.props.unfollowUser(item.id)}>UNFOLLOW</button>}
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
         </div>
      )
   }
}
    


export default Users;

