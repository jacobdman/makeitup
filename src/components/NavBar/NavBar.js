import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

const Calendar = props => {
  const handleClick = route => {
    //to route
  };

  return (
    <div className="nav-root">
      <div className="nav-logo">Logo goes here</div>
      <div className="bottomBar">
        <div className="linkWrapper">
          <div className="linkBox" onClick={() => handleClick('/')}>
            Home
          </div>
          <div className="linkBox" onClick={() => handleClick('/')}>
            Services
          </div>
          <div className="linkBox" onClick={() => handleClick('/')}>
            Portfolio
          </div>
          <div className="linkBox" onClick={() => handleClick('/')}>
            Contact
          </div>
        </div>
        <div className="linkBox" onClick={() => handleClick('/')}>
          <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
        </div>
      </div>
      <div className="nav-divider" />
    </div>
  );
};

export default withRouter(Calendar);
