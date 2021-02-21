import React, { Component } from 'react';
import './Main.css';

import LeftMenu from '../LeftMenu/LeftMenu';
import MainWrapper from './MainWrapper';

export default class Main extends Component {
  render() {
    return (
        <main className="main">
            <LeftMenu/>
            <MainWrapper/>
        </main>
    );
  }
}