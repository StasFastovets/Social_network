
const Profile = () => {
   return (
      <div className='content'>
         <div className="content__img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKAxNea46jqNFY58_jf0rqRDOm0wySbDyJw&usqp=CAU" alt="image"></img>
         </div>
         <div className="content__info">
            <div className="content__info-img">
               <img src="https://phlearn.com/wp-content/uploads/2019/04/Beginners-Photoshop-Double-Exposure-After.jpg" alt="#"></img>
            </div>
            <div className="content__info-text info-text">
               <div className="info-text__top">Fastovets S.</div>
               <div className="info-text__bottom">Date of birth: 19 january</div>
               <div className="info-text__bottom">City: Ichnya</div>
               <div className="info-text__bottom">E-mail: fastovets.stas@gmail.com</div>
            </div>
         </div>
         <div className='content__posts'>
            <p>My posts</p>
            <form className='content__posts-form' action="#" method="post">
               <textarea className='content__posts-area' name="comments"></textarea>
               <button className='content__posts-button' type='submit'>Send</button>
            </form>
         </div>
      </div>
   )
}

export default Profile;