import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);
