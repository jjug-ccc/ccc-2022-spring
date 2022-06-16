import React from 'react';
import './styles.scss';
import NavBar from '../NavBar';
import SEO from '../SEO';

const Preview: React.FC = () => {
    return (
        <div className="Preview">
            <SEO/>
            <NavBar/>
            <div className="section">
                <div className="container">
                    <p>test</p>
                </div>
            </div>
        </div>
    )
};

export default Preview;
