import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/profile' element={<Profile post={props.data.profilePage} dispatch={props.dispatch} />} />
        <Route path='/dialogs/*' element={<Dialog person={props.data.messagesPage} dispatch={props.dispatch} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div >
  );
}

export default App;
