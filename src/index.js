import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Redirect from './components/Redirect';


export default function Main() {
  return (

      <BrowserRouter>
        <Routes>
              <Route path='/' element={<App />} />
              <Route path='/redirect' element={<Redirect />}/>
        </Routes>
      </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

