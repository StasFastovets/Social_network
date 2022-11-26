import Info from './info/Info';
import Posts from './posts/Posts';
import './Profile.css'

const Profile = (props) => {

   return (
      <div className="profile">
         <Info />
         <Posts post={props.post} dispatch={props.dispatch} />
      </div>
   )
}

export default Profile;