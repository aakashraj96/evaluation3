import React from 'react';
import './LeftMenu.css';
import refresh from '../../images/refresh.svg';
import settings from '../../images/settings.svg';

const LeftMenu = props => (
  <div className="leftMenu">
    <div className="logo">
      <h1 className="logoText"> Bs </h1>
    </div>
    <img src={refresh} className="icon" />
    <img src={settings} className="icon" />
  </div>
);


export default LeftMenu;
