import './App.css';
import Header from './components/Header';
import Navigation from './components/Nav-bar';
import Profile from './components/Profile';

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
