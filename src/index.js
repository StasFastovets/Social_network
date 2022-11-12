import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { id: 1, message: 'Hi, how are you?', likes: 5 },
  { id: 2, message: 'I want to see you!', likes: 3 },
  { id: 3, message: 'How old are you?', likes: 2 },
  { id: 4, message: 'You are great person :)', likes: 1 },
]

let personData = [
  {id: 1, name: 'Stanislav'},
  {id: 2, name: 'Kristina'},
  {id: 3, name: 'Ruslan'},
  {id: 4, name: 'Sergiy'},
  {id: 5, name: 'Oleksand'},
]

let messageData = [
  {id: 1, message: 'Hello, how are you?'},
  {id: 2, message: 'My favorite job is programming'},
  {id: 3, message: 'I like to study very muchry'},
  {id: 4, message: 'Ben is going to do his homework'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post = {postData} person = {personData} message = {messageData}/>
  </React.StrictMode>
);

reportWebVitals();



// export default postData