import nav from './Navbar.module.css';

const Navigation = () => {
   return (
      <nav className={nav.navbar}>
         <ul className={nav.list}>
            <li className={nav.item}><a className={nav.link} href="#">Profile</a></li>
            <li className={nav.item}><a className={nav.link} href="#">Messages</a></li>
            <li className={nav.item}><a className={nav.link} href="#">News</a></li>
            <li className={nav.item}><a className={nav.link} href="#">Music</a></li>
            <li className={nav.item}><a className={nav.link} href="#">Settings</a></li>
         </ul>
      </nav >
   )
}

export default Navigation;