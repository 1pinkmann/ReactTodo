import './Header.css';
import React, { Component } from 'react';

import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

export default class Header extends Component {
  render() {
    return (
    <header className="header">
      <div className="header__wrapper">
        <Logo/>
        <ul className="header__list">
          <li className="header__item">
            <a href="#" className="header__link">Instagram</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Facebook</a>
          </li>
          <li className="header__item">
            <a href="#" className="header__link">Youtube</a>
          </li>
        </ul>
      </div>
      <Menu/>
    </header>
    );
  }
}