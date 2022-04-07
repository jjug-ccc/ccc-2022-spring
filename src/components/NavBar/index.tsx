import React from 'react';
import '../../assets/styles.scss';
import jjug_logo from '../../static/icons/jjug_logo.png';
import '../../i18n';

const NavBar : React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <img src={jjug_logo} alt="jjug logo"/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
