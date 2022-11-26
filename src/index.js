import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App data={store.getState()} dispatch={store.dispatch.bind(store)} />
         </BrowserRouter>
      </React.StrictMode>
   );
}


rerenderEntireTree(store.getState())

store.subscribe( () => { 
   let state = store.getState()
   rerenderEntireTree(state)
 })

reportWebVitals()



