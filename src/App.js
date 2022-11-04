import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navbar/Navbar';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Profile />
    </div >
  );
}

export default App;
