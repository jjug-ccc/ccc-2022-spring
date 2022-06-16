import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/styles.scss';
import jjug_logo from '../../static/icons/jjug_logo.png';
import '../../i18n';

const NavBar : React.FC = () => {
  return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <div className="navbar-item">
                  <Link to="/">
                      <img src={jjug_logo} alt="jjug logo"/>
                  </Link>
              </div>
          </div>
          <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                  <Link className="navbar-item" to="/preview">視聴</Link>
              </div>
          </div>
      </nav>
  );
};

export default NavBar;
