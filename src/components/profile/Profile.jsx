import Info from './info/Info';
import PostsContainer from './posts/Posts_container';
import './Profile.css'


const Profile = (props) => {

   return (
      <div className="profile">
         <Info />
         <PostsContainer store={props.store} dispatch={props.dispatch} />
      </div>
   )
}

export default Profile;