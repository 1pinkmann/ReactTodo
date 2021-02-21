import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
