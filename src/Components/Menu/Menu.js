import './Menu.css';
import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
      return (
      <ul className="menu">
        <li className="menu__item">
            <a href="#" className="menu__link">Category 1</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 2</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 3</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 4</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 5</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 6</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 7</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 8</a>
        </li>
        <li className="menu__item">
            <a href="#" className="menu__link">Category 9</a>
        </li>
      </ul>
      );
    }
  }