import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../../assets/styles.scss';
import '../../i18n';
import jjug_logo from '../../static/icons/jjug_logo.png';

const NavBar : React.FC = () => {
    const [isActive, setIsActive] = useState(false);

  return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
              <div className="navbar-item">
                  <Link to="/">
                      <img src={jjug_logo} alt="jjug logo"/>
                  </Link>
              </div>
              <a onClick={() => {
                  setIsActive(!isActive);
              }}
                 role="button"
                 className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                 aria-label="menu"
                 aria-expanded="false"
                 data-target="navbarBasic">
                  <span aria-hidden="true"/>
                  <span aria-hidden="true"/>
                  <span aria-hidden="true"/>
              </a>
          </div>
          <div id="navbarBasic" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-start">
                  <Link className="navbar-item" to="/viewer">視聴</Link>
              </div>
          </div>
      </nav>
  );
};

export default NavBar;
