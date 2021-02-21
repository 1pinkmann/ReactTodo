import './LeftMenu.css';
import React, { Component } from 'react';

export default class LeftMenu extends Component {
    render() {
      return (
        <ul className="left-menu">
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 1</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 2</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 3</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 4</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 5</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 6</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 7</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 8</a>
            </li>
            <li className="left-menu__item">
                <a href="#" className="left-menu__link">Link 9</a>
            </li>
        </ul>
      );
    }
  }