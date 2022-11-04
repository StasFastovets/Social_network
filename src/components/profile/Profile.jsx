import Info from './info/Info';
import Posts from './posts/Posts';
import './Profile.css'

const Profile = () => {
   return (
      <div className="profile">
         <Info />
         <Posts />
      </div>
   )
}

export default Profile;