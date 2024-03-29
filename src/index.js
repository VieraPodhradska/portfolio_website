import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Redirect from './components/Redirect';


export default function Main() {
  return (

      <HashRouter>
        <Routes>
              <Route path='/' element={<App />} />
              <Route path='/redirect' element={<Redirect />}/>
        </Routes>
      </HashRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

