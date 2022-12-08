import Info from './info/Info';
import PostsContainer from './posts/Posts_container';
import './Profile.css'


const Profile = () => {

   return (
      <div className="profile">
         <Info />
         <PostsContainer />
      </div>
   )
}

export default Profile;