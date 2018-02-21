import React from 'react';
import './MainBody.css';


const MainBody = props => (
  <div className="mainWindow">
    {props.children}
  </div>
);


export default MainBody;
