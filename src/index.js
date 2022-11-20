import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './state';
import App from './App';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App data={store.getState()} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
    </React.StrictMode>
  );
}


store.rewrite(rerenderEntireTree)
store.rerenderEntireTree()

reportWebVitals();



