import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/Dialogs_container';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/profile' element={<Profile store={props.store} dispatch={props.dispatch} />} />
        <Route path='/dialogs/*' element={<DialogsContainer store={props.store} dispatch={props.dispatch} />} />
        <Route path='/news' element={<News />} />
        <Route path='/music' element={<Music />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div >
  );
}

export default App;
