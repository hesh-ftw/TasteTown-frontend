import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './component/State/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>

{/* ensure that the application connected to the redux store */}
   <Provider store={store}> 
     <App />
   </Provider>
   
   </BrowserRouter>

  </React.StrictMode>
);
reportWebVitals();
