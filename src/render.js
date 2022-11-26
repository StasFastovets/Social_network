import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state, addPost, updatePostText) => {
  root.render(
    <React.StrictMode>
      <App data={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>
  );
}




