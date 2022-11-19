import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <Routes>
          <Route path='/profile' element={ <Profile post = {props.data.profilePage} addPost = {props.addPost} updatePostText = {props.updatePostText}/>} />
          <Route path='/dialogs/*' element={ <Dialog person = {props.data.messagesPage.persons} message = {props.data.messagesPage.messages}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}

export default App;
