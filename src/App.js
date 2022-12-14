import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navbar/Navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/Dialogs_container';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/profile/ProfileContainer';


const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/profile' element={<ProfileContainer />} />
        <Route path='/dialogs/*' element={<DialogsContainer />} />
        <Route path='/users/' element={<UsersContainer />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div >
  );
}

export default App;
