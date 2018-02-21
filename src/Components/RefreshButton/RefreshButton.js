import React from 'react';
import './RefreshButton.css';
import App from '../../App';
import refresh from '../../images/refresh.svg';

const LeftMenu = props => (
  <button
    className="refreshButton"
    onClick={() => {
    fetch('/insertData', {
      method: 'POST',
    }).then(() => {
      window.location.reload();
    });
  }
  }
  >

    <img src={refresh} className="buttonIcon" alt="refreshButton" />

  </button>
);


export default LeftMenu;
