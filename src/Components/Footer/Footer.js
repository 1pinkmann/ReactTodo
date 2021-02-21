import './Footer.css';
import React, { Component } from 'react';

import Logo from '../Logo/Logo';

export default class Footer extends Component {
  render() {
    return (
    <footer className="footer">
        <Logo/>
        <ul className="footer__menu">
            <li className="footer__item">
                <a href="#" className="footer__link">Footer Link 1</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Footer Link 2</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Footer Link 3</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Footer Link 4</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Footer Link 5</a>
            </li>
            <li className="footer__item">
                <a href="#" className="footer__link">Footer Link 6</a>
            </li>
        </ul>
    </footer>
    );
  }
}