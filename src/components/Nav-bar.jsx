
const Navigation = () => {
   return (
      <nav className='nav-bar'>
         <ul>
            <li className="nav-bar__item"><a className="nav-bar__link" href="#">Profile</a></li>
            <li className="nav-bar__item"><a className="nav-bar__link" href="#">Messages</a></li>
            <li className="nav-bar__item"><a className="nav-bar__link" href="#">News</a></li>
            <li className="nav-bar__item"><a className="nav-bar__link" href="#">Music</a></li>
            {/* <li className="nav-bar__item"><a className="nav-bar__link" href="#">Settings</a></li> */}
         </ul>
      </nav>
   )
}

export default Navigation;