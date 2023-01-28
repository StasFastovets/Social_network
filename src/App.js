import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navbar/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/Dialogs_container';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from './components/profile/ProfileContainer'
import { InitializeApp } from './redux/app_reducer';
import Preloader from './components/common/preloader/preloader';


// const App = (props) => {

//   return (
//     <div className='app-wrapper'>
//       <HeaderContainer />
//       <Navigation />
//       <Routes>
//         <Route path='/profile/:userId' element={<ProfileContainer />} />  
//         <Route path='/profile/*' element={<ProfileContainer />} />        
//         <Route path='/dialogs/*' element={<DialogsContainer />} />
//         <Route path='/users/' element={<UsersContainer />} />
//         <Route path='/news' element={<News />} />
//         <Route path='/music' element={<Music />} />
//         <Route path='/settings' element={<Settings />} />
//         <Route path='/login' element={<Login />} />
//       </Routes> 
//     </div >
//   );
// }


class App extends Component {

  componentDidMount() {
    this.props.InitializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <Routes>
          <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile/*' element={<ProfileContainer />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users/' element={<UsersContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div >
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

export default withRouter(connect(mapStateToProps, { InitializeApp }) (App))  

//Когда делаем connect компоненты, сбивается Routing, поэтому то что мы коннектим нужно обернуть хоком withRoute.
