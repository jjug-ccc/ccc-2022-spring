import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../../assets/styles.scss';
import { LINK } from '../../constant';

const Footer : React.FC = () => (
  <footer className="footer">
    <div className='container'>
      <div className='content'>
        <div className="columns is-desktop">
          <div className="column content has-text-left-desktop">
            <a className="pr-3" href={LINK.facebook} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
            <a className="pr-3" href={LINK.twitter}  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
          </div>
          <div className="column content has-text-right-desktop">
            <p>Copyright © 2007-2021 JJUG - All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
