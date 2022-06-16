import React from 'react';
import './styles.scss';
import NavBar from '../NavBar';
import SEO from '../SEO';
import MoviePlayer from "../MoviePlayer";
import TimeTable from "../TimeTable";

const Preview: React.FC = () => {
    return (
        <div className="Preview">
            <SEO/>
            <NavBar/>
            <div className="section">
                <div className="container">
                    <MoviePlayer />
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <TimeTable />
                </div>
            </div>
        </div>
    )
};

export default Preview;
