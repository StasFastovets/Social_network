import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import state, { updatePostText } from './state';
import { addPost, rewrite } from './state';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App data={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>
  );
}


rewrite(rerenderEntireTree)
rerenderEntireTree(state)

reportWebVitals();



